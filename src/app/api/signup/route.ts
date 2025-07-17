import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import User from '@/models/userModel';
import { sendEmail } from '@/helpers/mailer';
import connectMongo from '@/dbConnect/dbConnect';
import { OAuth2Client } from 'google-auth-library';
import { generateTokens } from '@/helpers/getToken'; // Import your token helper

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    await connectMongo();
    const reqBody = await request.json();
    const { username, email, password, googleToken } = reqBody;

    if (googleToken) {
      // Google OAuth flow
      const ticket = await googleClient.verifyIdToken({
        idToken: googleToken,
        audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      });
      
      const payload = ticket.getPayload();
      if (!payload?.email_verified || !payload.email) {
        return NextResponse.json(
          { error: 'Google account not verified or email missing' },
          { status: 401 }
        );
      }

      const googleEmail = payload.email.toLowerCase();
      const googleUsername = payload.name?.replace(/\s+/g, '_') || 
                            googleEmail.split('@')[0];

      // Check for existing user
      const existingUser = await User.findOne({ 
        $or: [
          { email: googleEmail },
          { googleId: payload.sub }
        ]
      });

      if (existingUser) {
        return NextResponse.json(
          { 
            error: 'User already exists',
            provider: existingUser.authProvider
          },
          { status: 409 }
        );
      }

      // Create new Google user WITHOUT password
      const newUser = new User({
        username: googleUsername,
        email: googleEmail,
        googleId: payload.sub,
        isVerified: payload.email_verified,
        authProvider: 'google',
        profilePicture: payload.picture
      });

      const savedUser = await newUser.save();

      // Generate tokens after user creation
      const tokenPayload = {
        userId: savedUser._id.toString(),
        email: savedUser.email,
        username: savedUser.username
      };

      const { accessToken, refreshToken } = generateTokens(tokenPayload);
      console.log('Generated tokens:', { accessToken, refreshToken });

      // Store refresh token in database
      savedUser.refreshToken = refreshToken;
      await savedUser.save();

      if (!payload.email_verified) {
        await sendEmail({
          email: savedUser.email,
          emailType: 'VERIFY',
          userId: savedUser._id.toString(),
        });
      }

      // Set refresh token as httpOnly cookie
      const response = NextResponse.json({
        success: true,
        message: 'Google sign-up successful',
        accessToken,
        user: {
          id: savedUser._id,
          email: savedUser.email,
          username: savedUser.username,
          isVerified: savedUser.isVerified
        }
      });

      response.cookies.set('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      return response;

    } else {
      // Regular email/password flow
      if (!username || !email || !password) {
        return NextResponse.json(
          { error: 'All fields are required' },
          { status: 400 }
        );
      }

      if (password.length < 8) {
        return NextResponse.json(
          { error: 'Password must be at least 8 characters' },
          { status: 400 }
        );
      }

      const normalizedEmail = email.toLowerCase();
      const existingUser = await User.findOne({ email: normalizedEmail });

      if (existingUser) {
        return NextResponse.json(
          { 
            error: 'Email already in use',
            provider: existingUser.authProvider
          },
          { status: 409 }
        );
      }

      const hashedPassword = await bcryptjs.hash(password, 12);

      const newUser = new User({
        username: username.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        isVerified: false,
        authProvider: 'email'
      });

      const savedUser = await newUser.save();

      // Generate tokens after user creation
      const tokenPayload = {
        userId: savedUser._id.toString(),
        email: savedUser.email,
        username: savedUser.username
      };

      const { accessToken, refreshToken } = generateTokens(tokenPayload);

      // Store refresh token in database
      savedUser.refreshToken = refreshToken;
      await savedUser.save();

      await sendEmail({
        email: savedUser.email,
        emailType: 'VERIFY',
        userId: savedUser._id.toString(),
      });

      // Set refresh token as httpOnly cookie
      const response = NextResponse.json({
        success: true,
        message: "Registration successful. Please check your email.",
        accessToken,
        user: {
          id: savedUser._id,
          email: savedUser.email,
          username: savedUser.username,
          isVerified: savedUser.isVerified
        }
      });

      response.cookies.set('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      return response;
    }
  } catch (error: unknown) {
    console.error('Signup Error:', error);
    return NextResponse.json(
      { 
        error: 'An error occurred during signup',
        details: error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
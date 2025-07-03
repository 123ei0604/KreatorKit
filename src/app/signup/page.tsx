"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          googleToken: credentialResponse.credential,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Google signup failed");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError("Google signup failed");
  };

  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-blue-900/20 p-8 rounded-xl shadow-2xl border border-blue-700/30 backdrop-blur-lg">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-white mb-2">
            Join Us
          </h1>
          <p className="text-center text-blue-200 mb-6">
            Create your account to get started
          </p>

          {success ? (
            <div className="text-center">
              <div className="mb-4 p-4 bg-blue-800/30 rounded-lg border border-blue-700/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-400 mx-auto mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="text-xl font-semibold text-white mb-2">
                  Check Your Email
                </h2>
                <p className="text-blue-200">
                  We've sent a verification link to your email address.
                </p>
                <p className="text-blue-300 text-sm mt-2">
                  Didn't receive it?{" "}
                  <button className="text-blue-400 hover:underline">
                    Resend
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded-lg text-sm border border-red-500/30 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-blue-100 mb-1"
                    >
                      Username
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-blue-900/30 text-white border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 placeholder-blue-400/50"
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-blue-100 mb-1"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-blue-900/30 text-white border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 placeholder-blue-400/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-blue-100 mb-1"
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-blue-900/30 text-black border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 placeholder-blue-400/50 pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3  top-9 text-blue-300 hover:text-blue-200 focus:outline-none"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-lg shadow-md text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 transition-all duration-200 ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                  
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-3 bg-blue-900/20 text-blue-300 rounded-full">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                    theme="filled_blue"
                    size="medium"
                    shape="rectangular"
                    text="signup_with"
                    width="100%"
                    logo_alignment="left"
                  />
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-blue-300">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-blue-400 hover:text-blue-200 transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

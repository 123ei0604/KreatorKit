export const runtime = "nodejs"; 
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL = "llama3-70b-8192";
const TEMPERATURE = 0.5;
const MAX_TOKENS = 1024;

function createCombinedPrompt(prompt: string, transcript: string): string {
  return `${prompt}:\n${transcript}\n\nPlease enhance or improve the transcript above, maintaining the original meaning.`;
}

// POST: /api/transcript
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const prompt = body.prompt;
    const transcript = body.transcript;

    if (!prompt || !transcript) {
      return NextResponse.json(
        {
          error: "Missing 'prompt' or 'transcript'.",
          instruction:
            "Please input 'prompt' in the format: <Channel name>:<Category>:<Title>",
        },
        { status: 400 }
      );
    }

    if ((prompt.match(/:/g) || []).length !== 2) {
      return NextResponse.json(
        {
          error: "Invalid prompt format.",
          instruction:
            "Use this format: <Channel name>:<Category>:<Title>",
        },
        { status: 400 }
      );
    }

    const combinedPrompt = createCombinedPrompt(prompt, transcript);

    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an AI language assistant that improves transcripts for clarity and tone.",
        },
        {
          role: "user",
          content: combinedPrompt,
        },
      ],
      temperature: TEMPERATURE,
      max_tokens: MAX_TOKENS,
    });

    const reply = completion.choices[0]?.message?.content;

    return NextResponse.json({ enhanced_transcript: reply });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}

// GET: /api/transcript (Health check)
export async function GET() {
  return NextResponse.json({
    status: "healthy",
    message: "Transcript enhancement API is running.",
  });
}

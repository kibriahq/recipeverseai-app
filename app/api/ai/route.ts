import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Message is required." }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return Response.json(
        { error: "GEMINI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash-lite",
      systemInstruction:
        "You are RecipeVerse AI, a concise and practical cooking assistant. Help with recipes, substitutions, meal planning, grocery ideas, dietary adjustments, cooking troubleshooting, and food safety basics. Keep answers clear, actionable, and friendly. When relevant, include quantities, steps, timing, and safety notes.",
    });

    const result = await model.generateContent(message);
    const reply = result.response.text();

    return Response.json({ reply });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "The assistant could not respond.",
      },
      { status: 500 }
    );
  }
}

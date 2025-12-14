import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    // --- DEBUGGING: List available models to the terminal ---
    // This helps us find the exact name your key has access to.
    try {
        const modelList = await genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }).getGenerativeModel(); 
        // Note: The SDK doesn't have a direct 'listModels' helper easily accessible in all versions, 
        // so we will just try the most standard one first.
    } catch (e) {
        console.log("Model check skipped");
    }
    // -------------------------------------------------------

    // TRY 1: The current standard (Fast & Cheap)
    // If this fails, look at your terminal for the error
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
      You are an expert skincare chemist. 
      The user asks: "${question}"
      
      Rules:
      1. Answer in 2-3 sentences max.
      2. If the ingredients conflict, start with "CAUTION: ⚠️".
      3. If they are safe, start with "SAFE: ✅".
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ answer: text });

  } catch (error: any) {
    console.error("--- GEMINI ERROR ---");
    console.error(error.message); // Read this in your terminal!
    
    // Fallback: If 1.5-flash fails, try the older stable one
    if (error.message.includes('404')) {
        return NextResponse.json({ 
            answer: "Error: Model not found. Please check your terminal for the specific error message." 
        });
    }

    return NextResponse.json({ error: 'Failed to analyze' }, { status: 500 });
  }
}
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Hardcode your key temporarily just for this test script to rule out .env issues
// REPLACE THIS STRING WITH YOUR ACTUAL KEY
const API_KEY = "AIzaSyDIwlKnXTJ5g2aVRM8gLpCp1wkPY_8uRFg"; 

const genAI = new GoogleGenerativeAI(API_KEY);

async function listModels() {
  try {
    console.log("Checking available models...");
    // This is the specific syntax to list models in the raw API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await response.json();
    
    if (data.models) {
        console.log("\n✅ SUCCESS! Here are the models you can use:");
        data.models.forEach(m => {
            if (m.supportedGenerationMethods.includes("generateContent")) {
                console.log(`- ${m.name.replace('models/', '')}`);
            }
        });
    } else {
        console.log("❌ ERROR:", data);
    }
  } catch (error) {
    console.error("❌ Network Error:", error);
  }
}

listModels();
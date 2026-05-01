import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

// 🔓 Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// 🤖 OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 📸 AI Receipt Analysis
app.post("/analyze-receipt", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        success: false,
        message: "No image provided",
      });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text:
                "You are a receipt OCR AI. Extract data from the receipt image and return ONLY valid JSON with keys: amount, store, category, note.",
            },
            {
              type: "image_url",
              image_url: {
                url: image,
              },
            },
          ],
        },
      ],
    });

    const result = response.choices[0].message.content;

    console.log("🤖 AI RESULT:", result);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("❌ AI ERROR:", error);

    res.status(500).json({
      success: false,
      message: "AI processing failed",
    });
  }
});

// 🚀 Start server
app.listen(5000, () => {
  console.log("🔥 AI Server running on http://localhost:5000");
});
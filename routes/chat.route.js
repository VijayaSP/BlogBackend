// import express from 'express';
// import dotenv from 'dotenv';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// dotenv.config();

// const router = express.Router();

// // Initialize Gemini with your API key
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// router.post('/chat', async (req, res) => {
//   const { prompt } = req.body;

//   if (!prompt) {
//     return res.status(400).json({ error: 'Prompt is required' });
//   }

//   try {
//     const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

//     const finalPrompt = `
// You are a helpful AI assistant for a blog website. The website allows users to read and write blog posts, 
// share their stories, and connect with other writers. Please provide a helpful response to the following user query: ${prompt}
// Keep your response concise, friendly, and informative. If asked about specific features, explain how to use them.
// If asked about writing blogs, provide tips and encouragement.`;

//     const result = await model.generateContent(finalPrompt);
//     const response = result.response;
//     const text = await response.text();

//     res.json({ response: text });
//   } catch (error) {
//     console.error('AI chat error:', error);
//     res.status(500).json({ error: 'Failed to generate response' });
//   }
// });

// export default router;
import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from '@google/generative-ai';

const router = express.Router();
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/chat', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    res.status(200).json({ response: text });
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;

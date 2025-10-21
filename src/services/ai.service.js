const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateCaption(base64ImageFile) {
const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config: {
      systemInstruction:`
      You are an AI model that generates creative and engaging captions for social media images.
      You generate single caption for the image.
      Your caption should be short and consise.
      Use hashtags and emojis where appropriate to enhance engagement.
      `,
    },
  });
  return  response.candidates?.[0]?.content?.parts?.[0]?.text || "No caption generated.";
;
}

module.exports = generateCaption
import express, { Request, Response, Router } from "express";
import { GoogleGenAI } from "@google/genai";

console.log("🔐 Clave API cargada:", process.env.GEMINI_API_KEY);

const router: Router = express.Router();

const apiKey: string | undefined = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Falta la clave de API de Gemini (GEMINI_API_KEY)");
}

const genAI = new GoogleGenAI({ apiKey });

router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      res.status(400).json({ error: "Prompt inválido o no proporcionado" });
      return;
    }

    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash", // o "gemini-pro" según acceso
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });

    const response = result.text;

    res.json({ response });
  } catch (error: any) {
    console.error("❌ Error completo:", JSON.stringify(error, null, 2));
    res.status(500).json({ error: "Error interno en Gemini" });
  }
});

export default router;

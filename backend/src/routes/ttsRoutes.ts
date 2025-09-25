import express, { Request, Response, Router } from "express";
import { synthesizeSpeech } from "../utils/textToSpeech";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  console.log("POST /api/tts recibido");
  const { text } = req.body;
  if (!text || typeof text !== "string") {
    res.status(400).json({ error: "Texto inválido o no proporcionado" });
    return;
  }

  try {
    const fileName = `tts-${Date.now()}.mp3`;
    await synthesizeSpeech(text, fileName);

    const audioUrl = `${req.protocol}://${req.get("host")}/audio/${fileName}`;
    res.json({ audioUrl });
  } catch (error) {
    console.error("Error generando audio:", error);
    res.status(500).json({ error: "Error al generar el audio" });
  }
});

export default router;

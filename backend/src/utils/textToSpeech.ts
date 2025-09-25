import textToSpeech, { protos } from "@google-cloud/text-to-speech";
import fs from "fs";
import util from "util";
import path from "path";

// Instancia cliente TTS
const client = new textToSpeech.TextToSpeechClient();

export async function synthesizeSpeech(text: string, outputFileName: string) {
  const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest =
    {
      input: { text },
      voice: {
        languageCode: "es-ES",
        ssmlGender: protos.google.cloud.texttospeech.v1.SsmlVoiceGender.FEMALE,
      },
      audioConfig: {
        audioEncoding: protos.google.cloud.texttospeech.v1.AudioEncoding.MP3,
      },
    };

  const [response] = await client.synthesizeSpeech(request);

  // Ruta absoluta para guardar el archivo
  const outputPath = path.resolve(
    __dirname,
    "../../public/audio",
    outputFileName
  );

  const writeFile = util.promisify(fs.writeFile);
  await writeFile(outputPath, response.audioContent as Buffer, "binary");

  return outputPath; // ruta del archivo generado
}

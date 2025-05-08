import { Request, Response } from "express";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../aws/s3Client";

export const uploadImage = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No se subió ninguna imagen" });
      return;
    }

    const file = req.file;
    const category = req.body.category || "otros"; // puedes enviar esto desde el form
    const key = `${category}/${Date.now()}-${file.originalname}`;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    await s3.send(new PutObjectCommand(params));

    const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    res.status(200).json({
      message: "Imagen subida correctamente",
      imageUrl,
    });
  } catch (error) {
    console.error("❌ Error al subir imagen:", error);
    res.status(500).json({ message: "Error interno al subir imagen" });
  }
};

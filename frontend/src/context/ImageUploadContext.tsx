import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface ImageUploadContextType {
  imageUrl: string | null;
  uploadImage: (file: File) => Promise<void>;
}

const ImageUploadContext = createContext<ImageUploadContextType | undefined>(undefined);

export const ImageUploadProvider = ({ children }: { children: ReactNode }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
  
    const uploadImage = async (file: File) => {
      const formData = new FormData();
      formData.append("image", file);
  
      try {
        const res = await axios.post("http://localhost:3000/api/upload", formData);
        setImageUrl(res.data.imageUrl); // esto depende del backend
      } catch (err) {
        console.error("Error al subir la imagen", err);
      }
    };
  
    return (
      <ImageUploadContext.Provider value={{ imageUrl, uploadImage }}>
        {children}
      </ImageUploadContext.Provider>
    );
  };

  
  export const useImageUpload = (): ImageUploadContextType => {
    const context = useContext(ImageUploadContext);
    if (!context) {
      throw new Error("useImageUpload debe usarse dentro de ImageUploadProvider");
    }
    return context;
  };
  
import { useState } from "react";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Por favor selecciona una imagen primero.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile); // "image" debe coincidir con el nombre esperado por el backend

    try {
      const response = await fetch("http://localhost:3001/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Imagen subida con éxito:", result);
      alert("Imagen subida correctamente a AWS S3");
    } catch (error) {
      console.error("Error al subir imagen:", error);
      alert("Hubo un error al subir la imagen.");
    }
  };

  return (
    <div>
      <h2>Subir Imagen</h2>
      <label htmlFor="fileInput">Selecciona una imagen</label>
      <input id="fileInput" type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir</button>
    </div>
  );
};

export default UploadImage;

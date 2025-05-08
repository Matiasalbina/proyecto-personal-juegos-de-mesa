import { useState } from "react";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("eurogames");

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
    formData.append("image", selectedFile);
    formData.append("category", category); // ← se envía al backend para crear carpetas

    try {
      const response = await fetch("http://localhost:3000/api/upload", {
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
    <div style={{ padding: "2rem" }}>
      <h2>Subir Imagen por Categoría</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="category">Categoría: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="eurogames">Eurogames</option>
          <option value="familiares">Familiares</option>
          <option value="parties">Parties</option>
          <option value="ofertas">Ofertas</option>
        </select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="fileInput">Selecciona una imagen: </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      <button onClick={handleUpload}>Subir</button>
    </div>
  );
};

export default UploadImage;

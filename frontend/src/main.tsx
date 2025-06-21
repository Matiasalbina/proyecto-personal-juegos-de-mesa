import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ImageUploadProvider } from "./context/ImageUploadContext";
import { ProductProvider } from "./context/productContext"; // 👈 importa el nuevo provider
import { AuthProvider } from "./context/AuthContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento root");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <ImageUploadProvider>
      <ProductProvider>
        <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </AuthProvider>
      </ProductProvider>
    </ImageUploadProvider>
  </React.StrictMode>
);

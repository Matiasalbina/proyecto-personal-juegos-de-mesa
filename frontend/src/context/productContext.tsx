// src/context/productContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

// Tipado del producto
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string[];
  stock: number;
}

// Creamos el contexto
const ProductContext = createContext<Product[] | null>(null);

// Provider
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook personalizado
export const useProducts = (): Product[] => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts debe usarse dentro de ProductProvider");
  }
  return context;
};

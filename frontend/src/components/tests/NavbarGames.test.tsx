import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../NavbarGames";

describe("NavbarGames", () => {
  it("debe abrir y cerrar el menú al hacer clic en el botón", () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const toggleBtn = screen.getByRole("button");
    fireEvent.click(toggleBtn);

    const list = screen.getByRole("navigation").querySelector(".list");
    expect(list?.classList.contains("open")).toBe(true);

    fireEvent.click(toggleBtn);
    expect(list?.classList.contains("open")).toBe(false);
  });

  it("debe mostrar el dropdown de 'Juegos de Mesa' al hacer hover", () => {
    render(<Navbar />, { wrapper: MemoryRouter });

    const juegosDeMesa = screen.getByText("Juegos de Mesa");
    fireEvent.mouseEnter(juegosDeMesa);

    expect(screen.getByText("Eurogames")).toBeInTheDocument();
    expect(screen.getByText("Familiares")).toBeInTheDocument();
    expect(screen.getByText("Parties")).toBeInTheDocument();
  });
  it("debe abrir y cerrar el dropdown de 'Juegos de Mesa' al hacer clic", () => {
    render(<Navbar />, { wrapper: MemoryRouter });
  
    // Abre el menú principal primero
    const toggleBtn = screen.getByRole("button");
    fireEvent.click(toggleBtn);
  
    const juegosDeMesaToggle = screen.getByText("Juegos de Mesa");
  
    // Primer clic: se abre
    fireEvent.click(juegosDeMesaToggle);
    expect(screen.getByText("Eurogames")).toBeInTheDocument();
  
    // Segundo clic: se cierra
    fireEvent.click(juegosDeMesaToggle);
    expect(screen.queryByText("Eurogames")).not.toBeInTheDocument();
  });
  
});

import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext"; // 👈 Importa tu AuthProvider
import Navbar from "../NavbarGames";

describe("NavbarGames", () => {
  const customRender = (ui: React.ReactElement) =>
    render(ui, {
      wrapper: ({ children }) => (
        <AuthProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </AuthProvider>
      ),
    });

  it("debe abrir y cerrar el menú al hacer clic en el botón", () => {
    customRender(<Navbar />);

    const toggleBtn = screen.getByRole("button");
    fireEvent.click(toggleBtn);

    const list = screen.getByRole("navigation").querySelector(".list");
    expect(list?.classList.contains("open")).toBe(true);

    fireEvent.click(toggleBtn);
    expect(list?.classList.contains("open")).toBe(false);
  });

  it("debe mostrar el dropdown de 'Juegos de Mesa' al hacer hover", () => {
    customRender(<Navbar />);

    const juegosDeMesa = screen.getByText("Juegos de Mesa");
    fireEvent.mouseEnter(juegosDeMesa);

    expect(screen.getByText("Eurogames")).toBeInTheDocument();
    expect(screen.getByText("Familiares")).toBeInTheDocument();
    expect(screen.getByText("Parties")).toBeInTheDocument();
  });

  it("debe abrir y cerrar el dropdown de 'Juegos de Mesa' al hacer clic", () => {
    customRender(<Navbar />);

    const toggleBtn = screen.getByRole("button");
    fireEvent.click(toggleBtn);

    const juegosDeMesaToggle = screen.getByText("Juegos de Mesa");

    fireEvent.click(juegosDeMesaToggle);
    expect(screen.getByText("Eurogames")).toBeInTheDocument();

    fireEvent.click(juegosDeMesaToggle);
    expect(screen.queryByText("Eurogames")).not.toBeInTheDocument();
  });
});

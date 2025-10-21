// src/__tests__/ValidationPage.test.tsx
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ValidationPage from "../pages/ValidationPage";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

// Mock de APIs
jest.mock("../api/users", () => ({
  getUserData: jest.fn(() => Promise.resolve({ name: "Sofía", address: "Calle 123", country: "Colombia" })),
}));
jest.mock("../api/countries", () => ({
  getCountries: jest.fn(() => Promise.resolve([{ name: "Colombia" }, { name: "Brasil" }])),
}));

describe("ValidationPage", () => {
  test("debe mostrar los datos del usuario cargados", async () => {
    render(
      <BrowserRouter>
        <ValidationPage />
      </BrowserRouter>
    );

    // Esperar a que cargue los datos
    await waitFor(() => screen.getByDisplayValue("Sofía"));
    expect(screen.getByDisplayValue("Sofía")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Calle 123")).toBeInTheDocument();
  });

  test("muestra errores si los campos están vacíos", async () => {
    render(
      <BrowserRouter>
        <ValidationPage />
      </BrowserRouter>
    );

    const submitBtn = await screen.findByText(/confirmar/i);
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/El nombre es obligatorio/i)).toBeInTheDocument();
  });
});

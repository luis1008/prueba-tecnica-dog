import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { describe, it, expect } from "vitest";

describe("Pagina Inicio", () => {
  it("Renderiza pagina inicio", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });

        expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/galeria de perros/i);
    });
});
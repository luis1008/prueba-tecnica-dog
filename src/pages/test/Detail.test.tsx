import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Detail from '../Detail';
import { describe, it, expect } from "vitest";

describe("Pagina Detalle", () => {
  it("Muestra la imagen y la raza", () => {
    render(
        <MemoryRouter initialEntries={[
            {
                pathname: "/detail",
                state: {
                    image: "https://example.com/dog.jpg",
                    breed: "hound",
                    subBreed: "afghan",
                },
            } as any
        ]}>
            <Detail />
        </MemoryRouter>
    );

    expect(screen.getByText(/hound/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
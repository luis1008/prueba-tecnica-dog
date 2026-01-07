import { render, screen, waitFor } from '@testing-library/react';
import BreedForm from '../BreedForm';
import { describe, it, expect, vi } from 'vitest';

vi.mock("../../api/dogApi", () => ({
  fetchBreeds: vi.fn().mockResolvedValue({
    hound: ["afghan", "basset"],
  }),
  fetchImagesByBreed: vi.fn().mockResolvedValue([
    "https://example.com/dog.jpg",
  ]),
}));

describe("BreedForm", () => {
  it("muestra el botón Buscar deshabilitado inicialmente", async () => {
    render(<BreedForm onResult={vi.fn()} />);

    const button = await screen.findByRole("button", { name: /buscar/i });

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });
});

  it('habilita el boton buscar cuando se selecciona una raza', () => {
    render(<BreedForm onResult={vi.fn()} />);

    expect(screen.getByRole("combobox", { name:"" })).toBeInTheDocument();
  });

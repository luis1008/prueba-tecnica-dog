import { render, screen } from '@testing-library/react';
import BreedForm from '../BreedForm';
import { describe, it, expect, vi } from 'vitest';

describe('BreedForm', () => {
  it('muestra el boton buscar deshabilitado inicialmente', () => {
    render(<BreedForm onResult={vi.fn()} />);

    const button = screen.getByRole('button', { name: /buscar/i });
    expect(button).toBeDisabled();
  });

  it('habilita el boton buscar cuando se selecciona una raza', () => {
    render(<BreedForm onResult={vi.fn()} />);

    expect(screen.getByRole("combobox", { name:"" })).toBeInTheDocument();
  });
});

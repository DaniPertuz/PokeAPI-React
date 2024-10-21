import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PokemonLayout from '../PokemonLayout';

describe('PokemonLayout', () => {
  test('should render Navbar and children', () => {
    render(
      <PokemonLayout>
        <div>Test Child</div>
      </PokemonLayout>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});

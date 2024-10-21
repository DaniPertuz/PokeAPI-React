import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PokemonSprite from '.';

describe('PokemonSprite', () => {
  test('should render two avatars with the correct images', () => {
    const mockFront = 'url_front.png';
    const mockBack = 'url_back.png';

    render(<PokemonSprite front={mockFront} back={mockBack} />);

    const frontAvatar = screen.getByRole('img', { name: /front_sprite/i });
    const backAvatar = screen.getByRole('img', { name: /back_sprite/i });

    expect(frontAvatar).toBeInTheDocument();
    expect(backAvatar).toBeInTheDocument();

    expect(frontAvatar).toHaveAttribute('src', mockFront);
    expect(backAvatar).toHaveAttribute('src', mockBack);
  });
});

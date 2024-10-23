import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { fetchPokeAPIItem } from '../../../api/pokeApi';
import PokemonItem from '../PokemonItem';

jest.mock('../../../api/pokeApi', () => ({
  fetchPokeAPIItem: jest.fn(),
}));

jest.mock('../../ui/ModalComponent', () => ({
  ModalComponent: ({ open, handleClose }: { open: boolean, handleClose: () => void; }) => (
    open ? (
      <div role="dialog">
        <button onClick={handleClose}>Close</button>
      </div>
    ) : null
  ),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ name: 'Bulbasaur', id: 1 }),
  }) as Promise<Response>
) as jest.Mock<Promise<Response>>;

describe('PokemonItem', () => {
  beforeEach(() => {
    (fetchPokeAPIItem as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: 'Bulbasaur',
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
      }),
    });
  });

  test('should render PokemonItem and open modal on click', async () => {
    await act(async () => {
      render(<PokemonItem url="https://pokeapi.co/api/v2/pokemon/1" />);
    });

    const avatars = screen.getAllByRole('img', { name: /bulbasaur/i });
    expect(avatars.length).toBeGreaterThan(0);

    fireEvent.click(avatars[0]);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByAltText(/bulbasaur/i)).toBeInTheDocument();
  });
});

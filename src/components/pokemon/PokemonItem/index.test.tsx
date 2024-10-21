import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonItem from '../PokemonItem';
import { PokeItemResponse } from '../../../interfaces/app-interfaces';

const mockPokemon: PokeItemResponse = {
  id: 1, name: 'Bulbasaur',
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/"
      },
      is_hidden: false,
      slot: 1
    }
  ],
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    front_shiny_female: null,
  },
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/"
      }
    }
  ]
};

jest.mock('../../ui/ModalComponent', () => ({
  ModalComponent: ({ open, handleClose }: { open: boolean, handleClose: () => void; }) => (
    open ? (
      <div role="dialog">
        <button onClick={handleClose}>Close</button>
      </div>
    ) : null
  ),
}));

describe('PokemonItem', () => {
  test('should render PokemonItem and open modal on click', () => {
    render(<PokemonItem pokemon={mockPokemon} />);

    const avatar = screen.getByRole('img', { name: /bulbasaur/i });
    expect(avatar).toBeInTheDocument();

    fireEvent.click(avatar);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});

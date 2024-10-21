import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PokemonContext } from '../../../context/PokemonContext';
import { PokeItemResponse } from '../../../interfaces/app-interfaces';
import PokemonGrid from '../PokemonGrid';

jest.mock('../../ui', () => ({
  LoadingComponent: () => <div>Loading...</div>,
  ErrorMessage: ({ error }: { error: string; }) => <div>{error}</div>,
}));

jest.mock('../PokemonItem', () => {
  return ({ pokemon }: { pokemon: PokeItemResponse; }) => <div>{pokemon.name}</div>;
});

jest.mock('../PokemonListPagination', () => () => <div>Pagination</div>);

const mockClearSearchText = jest.fn();
const mockFilterPokemonList = jest.fn();
const mockGoToNextPage = jest.fn();
const mockGoToPreviousPage = jest.fn();

const mockValue = {
  pokemonList: { count: 100, next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20', previous: null, results: [] },
  pokemonItemDetails: [],
  searchText: '',
  clearSearchText: mockClearSearchText,
  filterPokemonList: mockFilterPokemonList,
  goToNextPage: mockGoToNextPage,
  goToPreviousPage: mockGoToPreviousPage,
  currentPage: 1,
};

describe('PokemonGrid', () => {
  test('should render loading component when loading', () => {
    render(
      <PokemonContext.Provider value={{ ...mockValue, loading: true, error: null, filteredPokemon: [] }}>
        <PokemonGrid />
      </PokemonContext.Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render error message when there is an error', () => {
    render(
      <PokemonContext.Provider value={{ ...mockValue, loading: false, error: 'Error loading Pokémon', filteredPokemon: [] }}>
        <PokemonGrid />
      </PokemonContext.Provider>
    );

    expect(screen.getByText('Error loading Pokémon')).toBeInTheDocument();
  });

  test('should render filtered Pokémon and pagination when data is loaded', () => {
    render(
      <PokemonContext.Provider value={{
        ...mockValue,
        loading: false,
        error: null,
        filteredPokemon: [
          {
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
          }
        ]
      }}>
        <PokemonGrid />
      </PokemonContext.Provider>
    );

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Pagination')).toBeInTheDocument();
  });
});

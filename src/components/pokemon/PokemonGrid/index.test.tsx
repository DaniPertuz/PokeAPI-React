import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PokemonContext } from '../../../context/PokemonContext';
import PokemonGrid from '../PokemonGrid';

jest.mock('../../ui', () => ({
  LoadingComponent: () => <div>Loading...</div>,
  ErrorMessage: ({ error }: { error: string; }) => <div>{error}</div>,
}));

jest.mock('../PokemonItem', () => {
  return ({ url }: { url: string; }) => {
    return url ? <div>Bulbasaur</div> : <div>No Pokemon</div>;
  };
});


jest.mock('../PokemonListPagination', () => () => <div>Pagination</div>);

const mockClearSearchText = jest.fn();
const mockFilterPokemonList = jest.fn();
const mockGoToNextPage = jest.fn();
const mockGoToPreviousPage = jest.fn();

const mockValue = {
  pokemonList: { count: 100, next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20', previous: null, results: [{ name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' }] },
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
      <PokemonContext.Provider value={{ ...mockValue, loading: true, error: null, pokemonList: { count: 100, next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20', previous: null, results: [] } }}>
        <PokemonGrid />
      </PokemonContext.Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render error message when there is an error', () => {
    render(
      <PokemonContext.Provider value={{ ...mockValue, loading: false, error: 'Error loading Pokémon', pokemonList: { count: 100, next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20', previous: null, results: [] } }}>
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
        pokemonList: {
          count: 100,
          next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20',
          previous: null,
          results: [{ name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' }]
        }
      }}>
        <PokemonGrid />
      </PokemonContext.Provider>
    );

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Pagination')).toBeInTheDocument();
  });
});

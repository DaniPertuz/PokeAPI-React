import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { PokemonContext } from '../../../context/PokemonContext';
import PokemonListPagination from '.';

const mockClearSearchText = jest.fn();
const mockFilterPokemonList = jest.fn();
const mockGoToNextPage = jest.fn();
const mockGoToPreviousPage = jest.fn();

const mockContextValueBoth = {
  pokemonList: { count: 100, next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20', previous: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', results: [] },
  pokemonItemDetails: [],
  searchText: '',
  clearSearchText: mockClearSearchText,
  filterPokemonList: mockFilterPokemonList,
  goToNextPage: mockGoToNextPage,
  goToPreviousPage: mockGoToPreviousPage,
  currentPage: 2,
  loading: false,
  error: null,
  filteredPokemon: []
};

const mockContextValuePrev = {
  pokemonList: { count: 100, next: null, previous: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', results: [] },
  pokemonItemDetails: [],
  searchText: '',
  clearSearchText: mockClearSearchText,
  filterPokemonList: mockFilterPokemonList,
  goToNextPage: mockGoToNextPage,
  goToPreviousPage: mockGoToPreviousPage,
  currentPage: 3,
  loading: false,
  error: null,
  filteredPokemon: []
};

const mockContextValueNext = {
  pokemonList: { count: 100, next: 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=20', previous: null, results: [] },
  pokemonItemDetails: [],
  searchText: '',
  clearSearchText: mockClearSearchText,
  filterPokemonList: mockFilterPokemonList,
  goToNextPage: mockGoToNextPage,
  goToPreviousPage: mockGoToPreviousPage,
  currentPage: 1,
  loading: false,
  error: null,
  filteredPokemon: []
};

const renderWithContextBoth = (value = mockContextValueBoth) => {
  return render(
    <PokemonContext.Provider value={value}>
      <PokemonListPagination />
    </PokemonContext.Provider>
  );
};

const renderWithContextNext = (value = mockContextValueNext) => {
  return render(
    <PokemonContext.Provider value={value}>
      <PokemonListPagination />
    </PokemonContext.Provider>
  );
};

const renderWithContextPrev = (value = mockContextValuePrev) => {
  return render(
    <PokemonContext.Provider value={value}>
      <PokemonListPagination />
    </PokemonContext.Provider>
  );
};

describe('PokemonListPagination', () => {
  test('should render current page number', () => {
    renderWithContextNext();

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('should disable previous button when there is no previous page', () => {
    renderWithContextNext();

    const previousButton = screen.getByRole('button', { name: /previous/i });
    expect(previousButton).toBeDisabled();
  });

  test('should enable previous button when there is a previous page', () => {
    renderWithContextBoth();

    const previousButton = screen.getByRole('button', { name: /previous/i });
    expect(previousButton).toBeEnabled();
  });

  test('should call goToPreviousPage when previous button is clicked', () => {
    renderWithContextBoth();

    const previousButton = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(previousButton);

    expect(mockContextValuePrev.goToPreviousPage).toHaveBeenCalledTimes(1);
  });

  test('should disable next button when there is no next page', () => {
    renderWithContextPrev();

    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  test('should enable next button when there is a next page', () => {
    renderWithContextBoth();

    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeEnabled();
  });

  test('should call goToNextPage when next button is clicked', () => {
    renderWithContextBoth();

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockContextValueNext.goToNextPage).toHaveBeenCalledTimes(1);
  });
});

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { SearchComponent } from '../SearchComponent';
import { useNavbar } from '../../../hooks';
import { PokemonContext } from '../../../context/PokemonContext';

jest.mock('../../../hooks', () => ({
  useNavbar: jest.fn(),
}));

const mockClearSearchText = jest.fn();
const mockFilterPokemonList = jest.fn();
const mockGoToNextPage = jest.fn();
const mockGoToPreviousPage = jest.fn();

const mockContextValue = {
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

const theme = createTheme();

describe('SearchComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useNavbar as jest.Mock).mockReturnValue({
      displayTextField: true,
      theme: {
        palette: {
          info: {
            main: '#2196f3',
          },
        },
      },
      handleDisplayTextField: jest.fn(),
    });
  });

  test('should render TextField and IconButton', () => {
    render(
      <ThemeProvider theme={theme}>
        <PokemonContext.Provider value={mockContextValue}>
          <SearchComponent />
        </PokemonContext.Provider>
      </ThemeProvider>
    );

    expect(screen.getByLabelText('Buscar...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should call filterPokemonList on text change', () => {
    render(
      <ThemeProvider theme={theme}>
        <PokemonContext.Provider value={mockContextValue}>
          <SearchComponent />
        </PokemonContext.Provider>
      </ThemeProvider>
    );

    const input = screen.getByLabelText('Buscar...');
    fireEvent.change(input, { target: { value: 'Pikachu' } });

    expect(mockFilterPokemonList).toHaveBeenCalledWith('Pikachu');
  });

  test('should call clearSearchText and handleDisplayTextField on IconButton click', () => {
    render(
      <ThemeProvider theme={theme}>
        <PokemonContext.Provider value={mockContextValue}>
          <SearchComponent />
        </PokemonContext.Provider>
      </ThemeProvider>
    );

    const iconButton = screen.getByRole('button');
    fireEvent.click(iconButton);

    expect(mockClearSearchText).toHaveBeenCalled();
    expect(useNavbar().handleDisplayTextField).toHaveBeenCalled();
  });
});

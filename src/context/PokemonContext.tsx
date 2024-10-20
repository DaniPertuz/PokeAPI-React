import { createContext } from 'react';
import { PokeAPIResponse, PokeItemResponse } from '../interfaces/app-interfaces';

interface PokemonContextType {
  currentPage: number;
  loading: boolean;
  error: string | null;
  filteredPokemon: PokeItemResponse[];
  pokemonList: PokeAPIResponse;
  pokemonItemDetails: PokeItemResponse[];
  searchText: string;
  clearSearchText: () => void;
  filterPokemonList: (name: string) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

export const PokemonContext = createContext<PokemonContextType>({} as PokemonContextType);

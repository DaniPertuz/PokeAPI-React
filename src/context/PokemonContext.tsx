import { createContext } from 'react';
import { PokeAPIResponse, PokeItemResponse } from '../interfaces/app-interfaces';

interface PokemonContextType {
  loading: boolean;
  error: string | null;
  pokemonList: PokeAPIResponse;
  pokemonItemDetails: PokeItemResponse[];
  currentPage: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

export const PokemonContext = createContext<PokemonContextType>({} as PokemonContextType);
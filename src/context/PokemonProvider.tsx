import { useState, useEffect } from 'react';
import { fetchPokeAPI } from '../api/pokeApi';
import { PokeAPIResponse, PokeItemResponse } from '../interfaces/app-interfaces';
import { PokemonContext } from './PokemonContext';

export const PokemonProvider: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemonList, setPokemonList] = useState<PokeAPIResponse>({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const [allPokemonList, setAllPokemonList] = useState<PokeAPIResponse>({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const [pokemonItemDetails, setPokemonItemDetails] = useState<PokeItemResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const itemsPerPage = 20;

  const fetchPokemonList = async (page: number) => {
    setLoading(true);
    setError(null);
    setPokemonItemDetails([]);
    try {
      const offset = (page - 1) * itemsPerPage;
      const resp = await fetchPokeAPI(itemsPerPage, offset);

      if (!resp.ok) {
        setError('Error en la solicitud');
        setLoading(false);
        return;
      }

      const data: PokeAPIResponse = await resp.json();
      setPokemonList(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchAllPokemonList = async () => {
    setLoading(true);
    setError(null);
    setPokemonItemDetails([]);
    try {
      const resp = await fetchPokeAPI(1500, 0);

      if (!resp.ok) {
        setError('Error en la solicitud');
        setLoading(false);
        return;
      }

      const data: PokeAPIResponse = await resp.json();
      setAllPokemonList(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const goToNextPage = () => setCurrentPage((prev) => prev + 1);

  const goToPreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  const filterPokemonList = (name: string) => {
    setSearchText(name);
    if (name === '') {
      fetchPokemonList(1);
    } else {
      const filtered = allPokemonList.results.filter(pokemon =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );

      setPokemonList({
        ...pokemonList,
        results: filtered
      });
    }
  };

  const clearSearchText = () => {
    filterPokemonList('');
  };

  useEffect(() => {
    fetchAllPokemonList();
  }, []);

  useEffect(() => {
    fetchPokemonList(currentPage);
  }, [currentPage]);

  return (
    <PokemonContext.Provider value={{
      currentPage,
      loading,
      error,
      pokemonList,
      pokemonItemDetails,
      searchText,
      clearSearchText,
      filterPokemonList,
      goToNextPage,
      goToPreviousPage,
    }}>
      {children}
    </PokemonContext.Provider>
  );
};

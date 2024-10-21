import { useState, useEffect } from 'react';
import { fetchPokeAPI, fetchPokeAPIItem } from '../api/pokeApi';
import { PokeAPIResponse, PokeItemResponse, PokeResult } from '../interfaces/app-interfaces';
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
  const [pokemonItemDetails, setPokemonItemDetails] = useState<PokeItemResponse[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<PokeItemResponse[]>([]);
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

      const detailsPromises = data.results.map((pokemon: PokeResult) =>
        fetchPokeAPIItem(pokemon.url).then(res => res.json())
      );

      const details = await Promise.all(detailsPromises);
      setPokemonItemDetails(details);
      setFilteredPokemon(details);
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
      setFilteredPokemon(pokemonItemDetails);
    } else {
      const filtered = pokemonItemDetails.filter(pokemon =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }
  };

  const clearSearchText = () => {
    filterPokemonList('');
  };

  useEffect(() => {
    fetchPokemonList(currentPage);
  }, [currentPage]);

  return (
    <PokemonContext.Provider value={{
      currentPage,
      loading,
      error,
      filteredPokemon,
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

import { useState, useEffect } from 'react';
import { fetchPokeAPI, fetchPokeAPIItem } from '../api/pokeApi';
import { PokeAPIResponse, PokeItemResponse, PokeResult } from '../interfaces/app-interfaces';

export const usePokemonData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemonList, setPokemonList] = useState<PokeAPIResponse>({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const [pokemonItemDetails, setPokemonItemDetails] = useState<PokeItemResponse[]>([]);

  const fetchPokemonList = async (limit: number) => {
    try {
      const resp = await fetchPokeAPI(limit);

      if (!resp.ok) throw new Error('Error en la solicitud');

      const data: PokeAPIResponse = await resp.json();
      setPokemonList(data);

      const detailsPromises = data.results.map((pokemon: PokeResult) =>
        fetchPokeAPIItem(pokemon.url).then(res => res.json())
      );

      const details = await Promise.all(detailsPromises);
      setPokemonItemDetails(details);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPokemonListItem = (url: string) => {
    setLoading(true);
    fetchPokeAPIItem(url)
      .then((resp) => {
        if (!resp.ok) throw new Error('Error en la solicitud');
        return resp.json();
      })
      .then((data) => {
        setPokemonItemDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemonList(20);
  }, []);

  return {
    error,
    loading,
    pokemonList,
    pokemonItemDetails,
    fetchPokemonListItem
  };
};

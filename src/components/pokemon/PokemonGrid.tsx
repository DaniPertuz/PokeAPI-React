import { Grid } from '@mui/material';
import { usePokemonData } from '../../hooks/usePokemonData';
import { PokemonItem } from './PokemonItem';

export const PokemonGrid = () => {
  const { pokemonItemDetails } = usePokemonData();

  return (
    <Grid container spacing={3} sx={{ pl: 5, pr: 5 }}>
      {pokemonItemDetails?.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid>
  );
};

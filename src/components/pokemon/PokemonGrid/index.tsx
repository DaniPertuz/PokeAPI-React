import { useContext } from 'react';
import { Grid } from '@mui/material';
import { PokemonContext } from '../../../context/PokemonContext';
import { LoadingComponent } from '../../ui';
import { PokemonItem } from '../PokemonItem';
import { PokemonListPagination } from '../PokemonListPagination';
import { gridContainer } from './styles';

export const PokemonGrid = () => {
  const { loading, pokemonItemDetails } = useContext(PokemonContext);

  return (
    <Grid container spacing={3} sx={gridContainer}>
      {loading ?
        <LoadingComponent />
        :
        pokemonItemDetails.map((pokemon) => <PokemonItem key={pokemon.id} pokemon={pokemon} />)
      }
      <PokemonListPagination />
    </Grid>
  );
};

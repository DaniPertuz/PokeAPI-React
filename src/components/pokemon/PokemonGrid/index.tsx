import { useContext } from 'react';
import { Grid } from '@mui/material';
import { PokemonContext } from '../../../context/PokemonContext';
import { ErrorMessage, LoadingComponent } from '../../ui';
import PokemonListPagination from '../PokemonListPagination';
import PokemonItem from '../PokemonItem';
import { gridContainer } from './styles';

const PokemonGrid = () => {
  const { error, loading, filteredPokemon } = useContext(PokemonContext);

  return (
    <Grid container spacing={3} sx={gridContainer}>
      {loading ?
        <LoadingComponent />
        :
        (error && error !== '')
          ?
          <ErrorMessage error={error} />
          :
          <>
            {filteredPokemon.map((pokemon) => <PokemonItem key={pokemon.id} pokemon={pokemon} />)}
            <PokemonListPagination />
          </>
      }
    </Grid>
  );
}

export default PokemonGrid;

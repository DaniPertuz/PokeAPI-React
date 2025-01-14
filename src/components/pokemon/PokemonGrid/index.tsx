import { useContext } from 'react';
import { Grid } from '@mui/material';
import { PokemonContext } from '../../../context/PokemonContext';
import { ErrorMessage, LoadingComponent } from '../../ui';
import PokemonListPagination from '../PokemonListPagination';
import PokemonItem from '../PokemonItem';
import { gridContainer } from './styles';

const PokemonGrid = () => {
  const { error, loading, pokemonList } = useContext(PokemonContext);

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
            {pokemonList.results.map((pokemon) => <PokemonItem key={pokemon.name} url={pokemon.url} />)}
            <PokemonListPagination />
          </>
      }
    </Grid>
  );
}

export default PokemonGrid;

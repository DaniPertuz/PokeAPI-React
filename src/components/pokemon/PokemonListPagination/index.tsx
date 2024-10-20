import { useContext } from 'react';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import { Grid, Box, Button, Typography } from '@mui/material';
import { PokemonContext } from '../../../context/PokemonContext';
import { mainContainer, paginationButton, paginationContainer } from './styles';

export const PokemonListPagination = () => {
  const { currentPage, pokemonList, goToNextPage, goToPreviousPage } = useContext(PokemonContext);
  return (
    <Grid item xs={12}>
      <Box sx={mainContainer}>
        <Box sx={paginationContainer}>
          <Button variant="text" disabled={pokemonList.previous === null} onClick={goToPreviousPage}>
            <ArrowCircleLeft sx={paginationButton} />
          </Button>
          <Typography>{currentPage}</Typography>
          <Button variant="text" disabled={pokemonList.next === null} onClick={goToNextPage}>
            <ArrowCircleRight sx={paginationButton} />
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

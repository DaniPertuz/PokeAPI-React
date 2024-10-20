import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import { Grid, Box, Button, Typography } from '@mui/material';
import { mainContainer, paginationButton, paginationContainer } from './styles';

export const PokemonListPagination = () => {
  return (
    <Grid item xs={12}>
      <Box sx={mainContainer}>
        <Box sx={paginationContainer}>
          <Button variant="text">
            <ArrowCircleLeft sx={paginationButton} />
          </Button>
          <Typography>1</Typography>
          <Button variant="text">
            <ArrowCircleRight sx={paginationButton} />
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

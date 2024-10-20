import { Grid, Box, Typography } from '@mui/material';
import { searchContainer } from '../styles';

export const HeaderTitle = () => {
  return (
    <Grid item xs={4} sm={4} md={3} lg={2}>
      <Box sx={searchContainer}>
        <Typography variant='h6'>PokéAPI</Typography>
      </Box>
    </Grid>
  );
};

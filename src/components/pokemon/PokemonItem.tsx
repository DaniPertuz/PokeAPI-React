import { Grid, Card, CardMedia, Typography } from '@mui/material';
import { PokeItemResponse } from '../../interfaces/app-interfaces';
import { pokemonCardImageStyle, pokemonCardStyle } from './styles';

interface Props {
  pokemon: PokeItemResponse;
}

export const PokemonItem = ({ pokemon }: Props) => {
  const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={pokemonCardStyle}>
        <CardMedia component={'img'} image={pokemon?.sprites.front_default} sx={pokemonCardImageStyle} />
        <Typography variant='h5'>{pokemonName}</Typography>
      </Card>
    </Grid>
  );
};

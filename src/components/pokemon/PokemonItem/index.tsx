import { useState } from 'react';
import { Avatar, Card, Grid } from '@mui/material';
import { PokeItemResponse } from '../../../interfaces/app-interfaces';
import { ModalComponent } from '../../ui/ModalComponent';
import { pokemonCardStyle, pokemonCardImageStyle } from '../styles';

interface Props {
  pokemon: PokeItemResponse;
}

export const PokemonItem = ({ pokemon }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={pokemonCardStyle} onClick={handleOpen}>
          <Avatar src={pokemon?.sprites.front_default} sx={pokemonCardImageStyle} />
        </Card>
      </Grid>
      <ModalComponent open={open} pokemon={pokemon} handleClose={handleClose} />
    </>
  );
};

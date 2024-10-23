import { useEffect, useState } from 'react';
import { Avatar, Card, Grid } from '@mui/material';
import { PokeItemResponse } from '../../../interfaces/app-interfaces';
import { ModalComponent } from '../../ui/ModalComponent';
import { pokemonCardStyle, pokemonCardImageStyle } from '../styles';
import { fetchPokeAPIItem } from '../../../api/pokeApi';

interface Props {
  url: string;
}

const PokemonItem = ({ url }: Props) => {
  const [open, setOpen] = useState(false);
  const [pokemon, setPokemon] = useState<PokeItemResponse>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchPokemon = async () => {
    try {
      const data = await fetchPokeAPIItem(url).then(res => res.json());
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  });

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={pokemonCardStyle} onClick={handleOpen}>
          <Avatar src={pokemon?.sprites.front_default} alt={pokemon?.name} sx={pokemonCardImageStyle} />
        </Card>
      </Grid>
      <ModalComponent open={open} pokemon={pokemon!} handleClose={handleClose} />
    </>
  );
};

export default PokemonItem;

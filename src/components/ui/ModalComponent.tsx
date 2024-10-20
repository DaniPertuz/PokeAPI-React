import ReactDOM from 'react-dom';
import { Box, Modal, Typography } from '@mui/material';
import { PokeItemResponse } from '../../interfaces/app-interfaces';
import { capitalize } from '../../utils/constants';
import { PokemonSprite } from '../pokemon';

interface Props {
  pokemon: PokeItemResponse;
  open: boolean;
  handleClose: () => void;
}

const modalRoot = document.getElementById('modal-root') || document.body;

export const ModalComponent = ({ open, pokemon, handleClose }: Props) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
  };

  return ReactDOM.createPortal(
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-pokemon-details"
      aria-describedby="modal-pokemon-description"
    >
      <Box sx={style}>
        <Typography id="modal-pokemon-title" variant="h4" component="h2">
          {capitalize(pokemon.name)}
        </Typography>
        <PokemonSprite front={pokemon.sprites.front_default} back={pokemon.sprites.back_default} />
        <PokemonSprite front={pokemon.sprites.front_shiny} back={pokemon.sprites.back_shiny} />
        <Typography id="modal-pokemon-abilities"  variant="h6" sx={{ mt: 2 }}>
          Habilidades: {pokemon.abilities.map(t => capitalize(t.ability.name)).join(', ')}
        </Typography>
        <Typography id="modal-pokemon-types"  variant="h6" sx={{ mt: 2 }}>
          Tipo: {pokemon.types.map(t => capitalize(t.type.name)).join(', ')}
        </Typography>
      </Box>
    </Modal>,
    modalRoot
  );
};

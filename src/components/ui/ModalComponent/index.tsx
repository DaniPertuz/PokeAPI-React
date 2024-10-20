import ReactDOM from 'react-dom';
import { Box, capitalize, Modal, Typography } from '@mui/material';
import { PokeItemResponse } from '../../../interfaces/app-interfaces';
import { PokemonSprite } from '../../pokemon';
import { modalContainer } from '../styles';

interface Props {
  pokemon: PokeItemResponse;
  open: boolean;
  handleClose: () => void;
}

const modalRoot = document.getElementById('modal-root') || document.body;

export const ModalComponent = ({ open, pokemon, handleClose }: Props) => {
  const { abilities, name, sprites, types } = pokemon;

  return ReactDOM.createPortal(
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-pokemon-details"
      aria-describedby="modal-pokemon-description"
    >
      <Box sx={modalContainer}>
        <Typography id="modal-pokemon-title" variant="h4" component="h2">
          {capitalize(name)}
        </Typography>
        <PokemonSprite front={sprites.front_default} back={sprites.back_default} />
        <PokemonSprite front={sprites.front_shiny} back={sprites.back_shiny} />
        <Typography id="modal-pokemon-abilities" variant="h6" sx={{ mt: 2 }}>
          Habilidades: {abilities.map(({ ability }) => capitalize(ability.name)).join(', ')}
        </Typography>
        <Typography id="modal-pokemon-types" variant="h6" sx={{ mt: 2 }}>
          Tipo: {types.map(({ type }) => capitalize(type.name)).join(', ')}
        </Typography>
      </Box>
    </Modal>,
    modalRoot
  );
};

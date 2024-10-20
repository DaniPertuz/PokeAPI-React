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
  const { abilities, name, sprites, types } = pokemon;

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

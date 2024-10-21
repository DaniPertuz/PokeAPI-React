import ReactDOM from 'react-dom';
import { Box, capitalize, Modal } from '@mui/material';
import { PokeItemResponse } from '../../../interfaces/app-interfaces';
import { PokemonSprite } from '../../pokemon';
import { BodySmall, HeaderFour } from '../';
import { modalContainer } from '../styles';

interface Props {
  pokemon: PokeItemResponse;
  open: boolean;
  handleClose: () => void;
}

const modalRoot = document.getElementById('modal-root') || document.body;

export const ModalComponent = ({ open, pokemon, handleClose }: Props) => {
  if (!open) return null;

  const { abilities, name, sprites, types } = pokemon;

  const abilityText = `Habilidades: ${abilities.map(({ ability }) => capitalize(ability.name)).join(', ')}`;
  const typeText = `Tipo: ${types.map(({ type }) => capitalize(type.name)).join(', ')}`;

  return ReactDOM.createPortal(
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-pokemon-details"
      aria-describedby="modal-pokemon-description"
    >
      <Box sx={modalContainer}>
        <HeaderFour id={'modal-pokemon-title'} text={capitalize(name)} />
        <PokemonSprite front={sprites.front_default} back={sprites.back_default} />
        <PokemonSprite front={sprites.front_shiny} back={sprites.back_shiny} />
        <BodySmall id={'modal-pokemon-abilities'} text={abilityText} />
        <BodySmall id={'modal-pokemon-types'} text={typeText} />
      </Box>
    </Modal>,
    modalRoot
  );
};

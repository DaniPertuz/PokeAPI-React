import { Box, Avatar } from '@mui/material';
import { avatarContainer, avatarSize } from './styles';

interface Props {
  front: string;
  back: string;
}

const PokemonSprite = ({ front, back }: Props) => {
  return (
    <Box sx={avatarContainer}>
      <Avatar alt={"front_sprite"} src={front} sx={avatarSize} />
      <Avatar alt={"back_sprite"} src={back} sx={avatarSize} />
    </Box>
  );
};

export default PokemonSprite;

import { Box, Avatar } from '@mui/material';
import { avatarContainer, avatarSize } from '../styles';

interface Props {
  front: string;
  back: string;
}

export const PokemonSprite = ({ front, back }: Props) => {
  return (
    <Box sx={avatarContainer}>
      <Avatar src={front} sx={avatarSize} />
      <Avatar src={back} sx={avatarSize} />
    </Box>
  );
};

import { Box, Avatar } from '@mui/material';

interface Props {
  front: string;
  back: string;
}

export const PokemonSprite = ({ front, back }: Props) => {
  return (
    <Box sx={container}>
      <Avatar src={front} sx={avatarSize} />
      <Avatar src={back} sx={avatarSize} />
    </Box>
  );
};

const avatarSize = { height: 150, width: 150 };
const container = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' };

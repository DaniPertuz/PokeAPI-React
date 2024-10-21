import { Typography } from '@mui/material';

interface Props {
  id: string;
  text: string;
}

export const HeaderFour = ({ id, text }: Props) => (
  <Typography id={id} variant="h4" component="h2">{text}</Typography>
);

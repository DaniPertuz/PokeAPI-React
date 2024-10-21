import { Typography } from '@mui/material';

interface Props {
  id: string;
  text: string;
}

export const BodySmall = ({ id, text }: Props) => (
  <Typography id={id} variant="h6" sx={{ mt: 2 }}>{text}</Typography>
);

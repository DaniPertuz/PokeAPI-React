import { Theme } from '@mui/material';

export const pokemonCardStyle = (theme: Theme) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
  borderColor: theme.palette.error.main,
  borderRadius: 10,
  borderStyle: 'solid',
  borderWidth: 1,
  display: 'flex',
  height: '200px',
  justifyContent: 'center',
  padding: 10
});

export const pokemonCardImageStyle = () => ({
  width: '200px',
  height: '180px',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': { transform: 'scale(1.2)' }
});
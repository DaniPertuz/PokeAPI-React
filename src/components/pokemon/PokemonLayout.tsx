import { Box, Toolbar } from '@mui/material';
import { ReactElement } from 'react';
import { Navbar } from '../ui';

export const PokemonLayout = ({ children }: { children: ReactElement | ReactElement[]; }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

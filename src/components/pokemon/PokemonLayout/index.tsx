import { ReactElement } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Navbar } from '../../ui';

export const PokemonLayout = ({ children }: { children: ReactElement | ReactElement[]; }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box component={'main'} sx={{ flexGrow: 1, p: 3, mt: { xs: '20px', sm: '10px' } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

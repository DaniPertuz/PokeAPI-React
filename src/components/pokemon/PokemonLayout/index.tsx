import { ReactElement } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Navbar } from '../../ui';
import { container, listContainer } from './styles';

const PokemonLayout = ({ children }: { children: ReactElement | ReactElement[]; }) => {
  return (
    <Box sx={container}>
      <Navbar />
      <Box component={'main'} sx={listContainer}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default PokemonLayout;

import { Box, CircularProgress } from '@mui/material';
import { loadingContainer } from './styles';

export const LoadingComponent = () => {
  return (
    <Box sx={loadingContainer}>
      <CircularProgress size="3rem" />
    </Box>
  );
};

import { Box, CircularProgress } from '@mui/material';
import { centerTemporalMessage } from '../styles';

export const LoadingComponent = () => {
  return (
    <Box sx={centerTemporalMessage}>
      <CircularProgress size="3rem" />
    </Box>
  );
};

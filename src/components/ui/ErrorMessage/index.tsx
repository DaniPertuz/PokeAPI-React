import { Box, Typography } from '@mui/material';
import { centerTemporalMessage } from '../styles';

interface Props {
  error: string;
}

export const ErrorMessage = ({ error }: Props) => {
  return (
    <Box sx={centerTemporalMessage}>
      <Typography variant='h4'>{error}</Typography>
    </Box>
  );
};

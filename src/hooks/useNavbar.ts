import { useState } from 'react';
import { useTheme } from '@mui/material';

export const useNavbar = () => {
  const [displayTextField, setDisplayTextField] = useState(false);
  const theme = useTheme();

  const handleDisplayTextField = () => setDisplayTextField(!displayTextField);
  
  return {
    displayTextField,
    theme,
    handleDisplayTextField
  }
}

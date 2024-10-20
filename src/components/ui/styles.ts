import { Theme } from '@mui/material';

export const modalContainer = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

export const searchContainer = { alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 2 };

export const searchTextFieldStyle = (theme: Theme, displayTextField: boolean) => {
  const inputFieldColor = theme.palette.info.main;
  return {
    '& .MuiInput-underline:before': {
      borderBottomColor: inputFieldColor
    },
    '&:hover .MuiInput-underline:before': {
      borderBottomColor: inputFieldColor
    },
    '& input': {
      color: inputFieldColor
    },
    '&:not(.Mui-focused) .MuiInputLabel-root': {
      color: inputFieldColor
    },
    display: displayTextField ? 'block' : 'none'
  };
};

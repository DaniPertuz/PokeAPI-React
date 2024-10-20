import { CloseOutlined, SearchOutlined } from '@mui/icons-material';
import { Grid, Box, TextField, IconButton } from '@mui/material';
import { useNavbar } from '../../../hooks';
import { searchContainer, searchTextFieldStyle } from '../styles';

export const SearchComponent = () => {
  const { displayTextField, theme, handleDisplayTextField } = useNavbar();
  return (
    <Grid item xs={displayTextField ? 7 : 3} sm={4} md={3} lg={2}>
      <Box sx={searchContainer}>
        <TextField color={'info'} sx={searchTextFieldStyle(theme, displayTextField)} label="Buscar..." variant="standard" />
        <IconButton color='inherit' onClick={handleDisplayTextField}>
          {displayTextField ? <CloseOutlined /> : <SearchOutlined />}
        </IconButton>
      </Box>
    </Grid>
  );
};

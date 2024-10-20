import { useContext } from 'react';
import { CloseOutlined, SearchOutlined } from '@mui/icons-material';
import { Grid, Box, TextField, IconButton } from '@mui/material';
import { PokemonContext } from '../../../context/PokemonContext';
import { useNavbar } from '../../../hooks';
import { searchContainer, searchTextFieldStyle } from '../styles';

export const SearchComponent = () => {
  const { displayTextField, theme, handleDisplayTextField } = useNavbar();
  const { searchText, clearSearchText, filterPokemonList } = useContext(PokemonContext);

  const onIconButtonClick = () => {
    if (displayTextField) clearSearchText();

    handleDisplayTextField();
  };
  return (
    <Grid item xs={displayTextField ? 7 : 3} sm={4} md={3} lg={2}>
      <Box sx={searchContainer}>
        <TextField
          color={'info'}
          sx={searchTextFieldStyle(theme, displayTextField)}
          label="Buscar..."
          variant="standard"
          value={searchText}
          onChange={(e) => filterPokemonList(e.target.value)}
        />
        <IconButton color='inherit' onClick={onIconButtonClick}>
          {displayTextField ? <CloseOutlined /> : <SearchOutlined />}
        </IconButton>
      </Box>
    </Grid>
  );
};

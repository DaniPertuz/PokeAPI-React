import { SearchOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Grid container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant='h6' noWrap component={'div'}>PokéAPI</Typography>
          <IconButton color='inherit'>
            <SearchOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

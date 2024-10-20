import { AppBar, Grid, Toolbar } from '@mui/material';
import { HeaderTitle, SearchComponent } from '../';

export const Navbar = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Grid container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <HeaderTitle />
          <SearchComponent />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

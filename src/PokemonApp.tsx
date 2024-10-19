import { PokemonGrid, PokemonLayout } from './components/pokemon';
import { AppTheme } from './theme';

const PokemonApp = () => {
  return (
    <AppTheme>
      <PokemonLayout>
        <PokemonGrid />
      </PokemonLayout>
    </AppTheme>
  );
};

export default PokemonApp;

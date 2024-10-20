import { PokemonGrid, PokemonLayout } from './components/pokemon';
import { PokemonProvider } from './context/PokemonProvider';
import { AppTheme } from './theme';

const PokemonApp = () => {
  return (
    <AppTheme>
      <PokemonProvider>
        <PokemonLayout>
          <PokemonGrid />
        </PokemonLayout>
      </PokemonProvider>
    </AppTheme>
  );
};

export default PokemonApp;

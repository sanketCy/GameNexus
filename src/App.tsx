import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenereList';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " "main"`,
        lg: `"nav nav" "aside main"`, // 1024
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;

import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

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
      <GridItem area="main" bg="gold">
        Main
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="dodgerBlue">
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;

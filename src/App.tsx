import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " "main"`,
        lg: `"nav nav" "aside main"`, // 1024
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
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

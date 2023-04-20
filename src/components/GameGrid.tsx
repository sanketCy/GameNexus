import { Text } from '@chakra-ui/react';
import useGames from '../Hooks/useGames';

const GameGrid = () => {
  const { games, errors } = useGames();

  return (
    <>
      {errors && <Text> {errors} </Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
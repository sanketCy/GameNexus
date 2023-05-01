import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GamesCardContainer from './GamesCardContainer';

const GameGrid = () => {
  const { games, errors, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {errors && <Text> {errors} </Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamesCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GamesCardContainer>
          ))}
        {games.map((game) => (
          <GamesCardContainer>
            <GameCard key={game.id} game={game} />
          </GamesCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

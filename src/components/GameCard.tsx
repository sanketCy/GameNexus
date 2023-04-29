import { Game } from '../Hooks/useGames';
import { Card, CardBody, HStack, Image, Text } from '@chakra-ui/react';
import PlatfomrIocnList from './PlatfomrIocnList';
import CriticBadge from './CriticBadge';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Text fontSize="2xl">{game.name}</Text>
        <HStack justify="space-between">
          <PlatfomrIocnList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticBadge score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

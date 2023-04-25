import { Game } from '../Hooks/useGames';
import { Card, CardBody, Image, Text } from '@chakra-ui/react';
import PlatfomrIocnList from './PlatfomrIocnList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Text fontSize="2xl">{game.name}</Text>
        <PlatfomrIocnList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;

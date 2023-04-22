import { Game } from '../Hooks/useGames';
import { Card, CardBody, Image, Text } from '@chakra-ui/react';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Text fontSize="2xl">{game.name}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;

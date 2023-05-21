import { Game } from '../Hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatfomrIocnList from './PlatfomrIocnList';
import CriticBadge from './CriticBadge';
import getCroppedImgUrl from '../services/img-url';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <HStack justify="space-between" marginBottom={3}>
          <PlatfomrIocnList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticBadge score={+game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

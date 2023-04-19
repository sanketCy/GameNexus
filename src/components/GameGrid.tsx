import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface FetchGameFromApi {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGameFromApi>('/xgames')
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  });

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

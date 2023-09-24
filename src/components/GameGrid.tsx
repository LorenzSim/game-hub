import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCart from "./GameCart";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCartContainer from "./GameCartContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCartContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCartContainer>
          ))}
        {games.map((game) => (
          <GameCartContainer key={game.id}>
            <GameCart game={game} />
          </GameCartContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

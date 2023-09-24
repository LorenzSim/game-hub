import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCart from "./GameCart";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCartContainer from "./GameCartContainer";

type Props = {};

const GameGrid = ({}: Props) => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCartContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCartContainer>
          ))}
        {games.map((game) => (
          <GameCartContainer>
            <GameCart key={game.id} game={game} />
          </GameCartContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

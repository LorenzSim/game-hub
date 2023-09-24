import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const GameCartContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"} width="100%">
      {children}
    </Box>
  );
};

export default GameCartContainer;

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

type Props = {};

const PlatformSelector = ({}: Props) => {
  const { data: platforms, error } = usePlatforms();
  
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </MenuButton>
    </Menu>
  );
};

export default PlatformSelector;

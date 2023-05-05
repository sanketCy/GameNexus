import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../Hooks/usePlatforms';

const PlatformSelector = () => {
  const { data, errors } = usePlatforms();

  if (errors) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

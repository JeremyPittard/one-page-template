import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { RiFlashlightFill } from "react-icons/ri";

const navLinks = [
  { name: "About", path: "#" },
  { name: "Features", path: "#" },
  { name: "Pricing", path: "#" },
];

const dropdownLinks = [
  {
    name: "Blog",
    path: "#",
  },
  {
    name: "Documentation",
    path: "#",
  },
  {
    name: "Github Repo",
    path: "#",
  },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "white");

  return (
    <Box px={4} bg={bg}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxW="7xl"
      >
        <Icon as={RiFlashlightFill} h={8} w={8} />

        <HStack spacing={8} alignItems="center">
          <HStack
            as="nav"
            spacing={6}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </HStack>
        </HStack>

        <Button
          colorScheme="blue"
          size="md"
          rounded="md"
          href="#"
          display={{ base: "none", md: "flex" }}
          as="a"
        >
          Sign in
        </Button>
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={{ base: "inherit", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={{ base: "inherit", md: "none" }}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            <Text fontWeight="semibold" color="gray.500">
              Community
            </Text>
            <Stack pl={2} spacing={1} mt={"0 !important"}>
              {dropdownLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </Stack>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("blue.500", "blue.500"),
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

// Dropdown MenuLink Component
interface MenuLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem
        bg={useColorModeValue("white", "white")}
        _hover={{
          color: "blue.400",
          bg: useColorModeValue("gray.200", "gray.200"),
        }}
      >
        <Text>{name}</Text>
      </MenuItem>
    </Link>
  );
};

export default Navbar;

import {
  Stack,
  HStack,
  Link,
  Divider,
  IconButton,
  LinkProps,
  Icon,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";

const links = [
  "Blog",
  "Documentation",
  "Careers",
  "Sign up",
  "Terms of use",
  "Privacy policy",
];
const accounts = [
  {
    url: "https://twitter.com/muhammad_ahmaad",
    label: "Facebook",
    type: "twitter",
    icon: <FaFacebook />,
  },
  {
    url: "https://linkedin.com/in/muhammad-ahmad20",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
  {
    url: "https://linkedin.com/in/muhammad-ahmad20",
    label: "Instagram",
    type: "",
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  const hoverColour = useColorModeValue("blue.500", "blue.500");
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <Stack
        maxW="7xl"
        marginInline="auto"
        p={8}
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Link href="https://templateskart.com" isExternal>
          <Icon as={RiFlashlightFill} h={8} w={8} />
        </Link>

        {/* Desktop Screen */}
        <HStack
          spacing={4}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          {links.map((link, index) => (
            <CustomLink key={index}>{link}</CustomLink>
          ))}
        </HStack>

        {/* Mobile and Tablet Screens */}
        <Stack display={{ base: "flex", md: "none" }} alignItems="center">
          <HStack alignItems="center">
            <CustomLink>Sign up</CustomLink>
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Blog</CustomLink>
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Career</CustomLink>
          </HStack>
          <HStack alignItems="center">
            <CustomLink>Documentation</CustomLink>
            <Divider h="1rem" orientation="vertical" />
            <CustomLink>Terms of use</CustomLink>
          </HStack>
          <CustomLink>Privacy policy</CustomLink>
        </Stack>

        <Stack
          direction="row"
          spacing={5}
          pt={{ base: 4, md: 0 }}
          alignItems="center"
        >
          {accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              icon={sc.icon}
              rounded="md"
              _hover={{
                textDecoration: "none",
                color: hoverColour,
              }}
            />
          ))}
        </Stack>
      </Stack>
      <Divider orientation="horizontal" colorScheme={"gray"} />
      <Stack
        maxW="7xl"
        marginInline="auto"
        p={8}
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Text>
          In the spirit of reconciliation the Globex Corporation acknowledges
          the Traditional Custodians of country throughout Australia and their
          connections to land, sea and community. We pay our respect to their
          Elders past and present and extend that respect to all Aboriginal and
          Torres Strait Islander peoples today.
        </Text>
      </Stack>
      <Divider orientation="horizontal" colorScheme={"gray"} />
      <Stack
        maxW="7xl"
        marginInline="auto"
        p={8}
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Text>&copy; copyright {year}</Text>
        <Link
          href="jpittard.net"
          target={"_blank"}
          lineHeight="inherit"
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("blue.500", "blue.500"),
          }}
        >
          made by this guy.
        </Link>
      </Stack>
    </>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      href="#"
      fontSize="md"
      lineHeight="inherit"
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("blue.500", "blue.500"),
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;

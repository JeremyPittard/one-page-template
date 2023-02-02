import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <Box
        w="full"
        h="container.sm"
        backgroundImage="url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              Build Your new <chakra.span color="blue.400">Saas</chakra.span>
            </Heading>
            <Button
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
            >
              Start project
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Hero;

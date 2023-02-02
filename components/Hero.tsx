import { Box, chakra, Flex, Heading, Stack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Box
        w="full"
        h="container.sm"
        backgroundImage="url(./img/bg.jpg)"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.500"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              Globex
              <chakra.span color="blue.400">Corporation</chakra.span>
            </Heading>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Hero;

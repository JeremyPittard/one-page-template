import { PropsWithChildren } from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  TextProps,
} from "@chakra-ui/react";
import { DottedBoxProps, FeaturesProps } from "@/utils/custom-interfaces";

const Features = (props: FeaturesProps) => {
  let randomImageId = Math.ceil(Math.random() * 1017);
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14} my="45px">
      <Stack
        direction={{
          base: "column",
          md: props.imageSide == "right" ? "row-reverse" : "row",
        }}
        justifyContent="center"
      >
        <Box mr={{ base: 0, md: 5 }} pos="relative">
          <DottedBox position={props.imageSide == "right" ? "right" : "left"} />
          <Image
            alt=""
            boxShadow="lg"
            w="100%"
            h="100%"
            minW={{ base: "auto", md: "30rem" }}
            maxH="20rem"
            objectFit="cover"
            src={`https://picsum.photos/id/${randomImageId}/480/320`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center">
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            On a mission to empower Front end developers
          </chakra.h1>
          <Box>
            <Content>
              Building products is hard. We&apos;ve built our fair share and
              we&apos;ve noticed the problems you always run into.
            </Content>
            <Content mt={4}>
              TemplatesKart provides the best ChakraUI templates. Now you can
              focus on your business, not on the boilerplate.
            </Content>
            <Content mt={4}>
              You want to build a product and we want to help you. Building
              products has changed our lives in ways we couldn&apos;t imagine
              and we want to help you achieve that success too.
            </Content>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      maxW={"55ch"}
      {...props}
    >
      {children}
    </Text>
  );
};

const DottedBox = (props: DottedBoxProps) => {
  return (
    <Box
      position="absolute"
      left={props.position == "left" ? "-45px" : "unset"}
      right={props.position == "right" ? "-45px" : "unset"}
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
};

export default Features;

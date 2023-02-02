import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const FAQ = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Heading
        as="h2"
        size="lg"
        fontWeight="bold"
        textAlign="center"
        mb={{ base: "4", md: "2" }}
      >
        Frequently Asked Questions
      </Heading>
      <Accordion
        my={{ base: 6, md: 10 }}
        maxW="55ch"
        mx={"auto"}
        defaultIndex={[0]}
        allowMultiple
      >
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading as="h3" fontSize="2xl">
                Section 1 title
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text
              pb={4}
              lineHeight="1.375"
              fontWeight="400"
              color="gray.500"
              fontSize={"lg"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading as="h3" fontSize="2xl">
                Section 2 title
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text
              pb={4}
              lineHeight="1.375"
              fontWeight="400"
              color="gray.500"
              fontSize={"lg"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default FAQ;

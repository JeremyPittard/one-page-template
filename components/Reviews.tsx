import { Container, Heading, Flex, Text } from "@chakra-ui/react";
import Card from "./Card";

const reviewData = {
  review: `What a wonderful little cottage! More spacious and adorable than the
    pictures show. We never met our hosts, but we felt welcomed and...`,
  name: "Nigel",
  country: "United Kingdom",
};

const Reviews = () => {
  let randomImageId = Math.ceil(Math.random() * 1018);
  return (
    <Container maxW="5xl" px={{ base: 5, md: 10 }} py={{ base: 5, md: 14 }}>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        textAlign="center"
        mb={{ base: "4", md: "2" }}
      >
        What guests are saying about homes in the United States
      </Heading>
      <Flex
        as="section"
        alignItems="start"
        justify="between"
        flexDirection={{ base: "column", md: "row" }}
        my={{ base: 6, md: 10 }}
      >
        {Array.from(Array(3).keys()).map((id) => {
          return (
            <Card
              key={id}
              imageSrc={`https://picsum.photos/id/${
                randomImageId + id
              }/300/300`}
              {...reviewData}
            />
          );
        })}
      </Flex>
    </Container>
  );
};

export default Reviews;

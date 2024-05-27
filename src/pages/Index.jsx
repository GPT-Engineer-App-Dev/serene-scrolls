import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="lg" mb={4}>Blog Posts</Heading>
          <Box mb={4} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">First Blog Post</Heading>
            <Text mt={2}>This is a summary of the first blog post...</Text>
          </Box>
          <Box mb={4} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md">Second Blog Post</Heading>
            <Text mt={2}>This is a summary of the second blog post...</Text>
          </Box>
        </Box>

        <Box flex="1" p={4} bg="gray.50" borderRadius="lg" ml={{ md: 4 }}>
          <Heading as="h3" size="md" mb={4}>Recent Posts</Heading>
          <VStack align="start" spacing={2}>
            <Link href="#">First Blog Post</Link>
            <Link href="#">Second Blog Post</Link>
            <Link href="#">Third Blog Post</Link>
          </VStack>

          <Divider my={4} />

          <Heading as="h3" size="md" mb={4}>Categories</Heading>
          <VStack align="start" spacing={2}>
            <Link href="#">Category 1</Link>
            <Link href="#">Category 2</Link>
            <Link href="#">Category 3</Link>
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={4}>
        <Flex justifyContent="center" alignItems="center">
          <HStack spacing={4}>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
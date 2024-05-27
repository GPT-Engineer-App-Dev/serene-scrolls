import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, Divider, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">My Blog</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/add-post">Add Post</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="lg" mb={4}>Blog Posts</Heading>
          {posts.map((post, index) => (
            <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">{post.title}</Heading>
              {post.image && <Box mt={2}><img src={post.image} alt={post.title} style={{ maxWidth: "100%" }} /></Box>}
              <Text mt={2}>{post.content}</Text>
            </Box>
          ))}
        </Box>

        <Box flex="1" p={4} bg="gray.50" borderRadius="lg" ml={{ md: 4 }}>
          <Heading as="h3" size="md" mb={4}>Recent Posts</Heading>
          <VStack align="start" spacing={2}>
            {posts.slice(0, 5).map((post, index) => (
              <Link key={index} href="#">{post.title}</Link>
            ))}
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
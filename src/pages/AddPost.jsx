import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, image };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Container maxW="container.md" mt={4} bg={useColorModeValue("white", "gray.800")} p={4} borderRadius="lg">
      <Heading as="h2" size="lg" mb={4}>Add New Post</Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl id="content" isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
          </FormControl>
          <FormControl id="image">
            <FormLabel>Image</FormLabel>
            <Input type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">Add Post</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default AddPost;
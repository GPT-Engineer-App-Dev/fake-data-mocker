import React, { useState } from "react";
import { Box, Heading, Input, List, ListItem, VStack, HStack, IconButton, useToast, Text, Container } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <VStack p={8} boxShadow="xl" bg="white" borderRadius="lg">
      <Heading mb="8" color="brand.700">
        Todo App
      </Heading>
      <HStack>
        <Input value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Add a new task..." />
        <IconButton icon={<FaPlus />} onClick={addTodo} colorScheme="blue" aria-label="Add todo" mx={1} />
      </HStack>
      <List spacing={3} my={5} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} p={4} bg="brand.100" borderRadius="md" _hover={{ bg: "brand.200" }}>
            <HStack justify="space-between">
              <Box>{todo}</Box>
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;

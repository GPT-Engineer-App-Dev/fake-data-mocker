import React, { useState } from "react";
import Footer from "../components/Footer";
import { Box, Heading, Input, List, ListItem, VStack, HStack, IconButton, Button, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showFooter, setShowFooter] = useState(true);
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

  const toggleFooter = () => setShowFooter(!showFooter);

  return (
    <VStack p={8} boxShadow="xl" bg="white" borderRadius="lg">
      <Heading mb="4" color="brand.700">
        Todo App
      </Heading>
      <HStack>
        <Input value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Add a new task..." />
        <IconButton icon={<FaPlus />} onClick={addTodo} colorScheme="blue" aria-label="Add todo" mx={1} />
      </HStack>
      <Button onClick={toggleFooter} colorScheme="blue" size="sm" mb="4">
        {showFooter ? "Hide Footer" : "Show Footer"}
      </Button>
      <List spacing={3} my={5} w="100%">
        {}
      </List>
      {showFooter && <Footer />}
    </VStack>
  );
};

export default Index;

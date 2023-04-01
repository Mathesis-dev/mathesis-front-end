import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const bgColors = [
  "#6E4AC2",
  "#00A6CE",
  "#ff3333",
  "#fdf498",
  "#fe8a71",
  "#7bc043",
  "#4b3832",
  "#3c2f2f",
  "#8b9dc3",
];

export default function Footer() {
  const [selectedColor, setSelectedColor] = useState(bgColors[0]);

  return (
    <Flex
      w={"100%"}
      align={"center"}
      justify={"space-around"}
      h={{ base: "5rem", sm: "12.5rem" }}
      bg={"primary.200"}
    >
      <Button
        borderRadius={"0px"}
        width={{ base: "0px", md: "12.5rem", lg: "18.75rem" }}
        height={{ base: "0px", md: "6.25rem" }}
        display={{ base: "none", md: "flex" }}
        bg={selectedColor}
        color={"white"}
        fontSize={{ base: "1.125rem", lg: "1.625rem" }}
        fontWeight={"bold"}
        onMouseOver={() =>
          setSelectedColor(
            bgColors[Math.floor(Math.random() * bgColors.length)]
          )
        }
        _hover={{
          backgroundColor: selectedColor,
        }}
      >
        Mathesis
      </Button>
      <Flex width={"21.875rem"} justify={"space-around"}>
        <Text
          cursor={"pointer"}
          color={"white"}
          fontSize={{ base: "1rem", sm: "1.125rem" }}
        >
          Criar conta
        </Text>
        <Text
          cursor={"pointer"}
          color={"white"}
          fontSize={{ base: "1rem", sm: "1.125rem" }}
        >
          Login
        </Text>
        <Text
          cursor={"pointer"}
          color={"white"}
          fontSize={{ base: "1rem", sm: "1.125rem" }}
        >
          Sobre nós
        </Text>
      </Flex>
    </Flex>
  );
}

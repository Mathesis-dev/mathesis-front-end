import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SignPagesHeader() {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };

  return (
    <Flex
      className="header"
      w={"100%"}
      bg={"primary.200"}
      justify={"space-between"}
      align={"center"}
      h={{ base: "5rem", sm: "6.875rem" }}
      position={"fixed"}
      paddingX={{ base: "10%", md: "10%" }}
    >
      <Button
        borderRadius={"20px"}
        paddingX={{ base: "1.5625rem", sm: "1.875rem" }}
        paddingY={{ base: "1.25rem", sm: "1.5625rem" }}
        _hover={{
          color: "white",
          bg: "black",
        }}
        onClick={navigateToLandingPage}
      >
        Voltar
      </Button>
      <Flex
        color={"white"}
        fontWeight={"bold"}
        fontSize={{ base: "1.25rem", sm: "1.4375rem", lg: "1.625rem" }}
      >
        Mathesis
      </Flex>
    </Flex>
  );
}

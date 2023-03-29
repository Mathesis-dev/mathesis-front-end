import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };

  return (
    <Flex
      className="page-container"
      direction={"column"}
      w={"100vw"}
      bg={"#1F173F"}
      h={"100vh"}
    >
      <Flex
        className="header"
        w={"100%"}
        bg={"#1F173F"}
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

      <Flex
        className="login-form-container"
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        direction={"column"}
      >
        <Flex
          w={{
            base: "80%",
            sm: "70%",
            md: "50%",
            lg: "40%",
            xl: "25%",
          }}
          direction={"column"}
          color={"white"}
          fontWeight={"bold"}
        >
          <Text
            fontSize={{ base: "1.25rem" }}
            marginBottom={{ base: "1.25rem" }}
            textAlign={"center"}
          >
            Login
          </Text>
          <Flex
            direction={"column"}
            minH={{ base: "14rem" }}
            justify={"space-between"}
          >
            <Flex direction={"column"}>
              E-mail
              <Input
                type={"email"}
                borderRadius={{ base: "15px" }}
                borderColor={"rgba(235, 235, 245, 0.2)"}
                _hover={{
                  borderColor: "#6E4AFF",
                  boxShadow: "#6E4AFF",
                }}
                _focusVisible={{
                  borderColor: "#6E4AFF",
                  boxShadow: "#6E4AFF",
                }}
              />
            </Flex>
            <Flex direction={"column"}>
              Senha
              <Input
                type={"password"}
                borderRadius={{ base: "15px" }}
                borderColor={"rgba(235, 235, 245, 0.2)"}
                _hover={{
                  borderColor: "#6E4AFF",
                  boxShadow: "#6E4AFF",
                }}
                _focusVisible={{
                  borderColor: "#6E4AFF",
                  boxShadow: "#6E4AFF",
                }}
              />
              <Button
                color={"black"}
                borderRadius={{ base: "15px" }}
                mt={{ base: "1.5625rem" }}
                p={{ base: "1.25rem" }}
                _hover={{
                  color: "white",
                  bg: "black",
                }}
              >
                Login
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Text color={"white"} cursor={"pointer"} mt={{ base: "1.625rem" }}>
          Esqueceu sua senha?
        </Text>
        <Text color={"white"} cursor={"pointer"} mt={{ base: "0.625rem" }}>
          Novo aqui? Crie sua conta!
        </Text>
      </Flex>
    </Flex>
  );
}

export default Login;

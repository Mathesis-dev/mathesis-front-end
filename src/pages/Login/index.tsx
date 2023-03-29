import {
  Button,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Text,
  Icon,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../../components/ErrorMessage";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <Flex
      className="page-container"
      direction={"column"}
      w={"100vw"}
      bg={"primary.200"}
      h={"100vh"}
    >
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
          <form onSubmit={login}>
            <FormControl isRequired>
              <Text
                fontSize={{ base: "1.25rem" }}
                marginBottom={{ base: "1.25rem" }}
                textAlign={"center"}
              >
                Login
              </Text>
              <Flex
                direction={"column"}
                minH={{ base: error ? "20rem" : "15rem" }}
                justify={"space-between"}
              >
                <Flex direction={"column"}>
                  {error && <ErrorMessage message={error} />}

                  <FormLabel>E-mail</FormLabel>
                  <Input
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    type={"email"}
                    borderRadius={{ base: "15px" }}
                    borderColor={"shadow.100"}
                    _hover={{
                      borderColor: "primary.100",
                      boxShadow: "primary.100",
                    }}
                    _focusVisible={{
                      borderColor: "primary.100",
                      boxShadow: "primary.100",
                    }}
                  />
                </Flex>
                <Flex direction={"column"}>
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <Input
                      onChange={(event) =>
                        setPassword(event.currentTarget.value)
                      }
                      type={showPassword ? "text" : "password"}
                      borderRadius={{ base: "15px" }}
                      borderColor={"shadow.100"}
                      _hover={{
                        borderColor: "primary.100",
                        boxShadow: "primary.100",
                      }}
                      _focusVisible={{
                        borderColor: "primary.100",
                        boxShadow: "primary.100",
                      }}
                    />
                    <InputRightElement width="4rem">
                      <Button
                        bg={"transparent"}
                        h="1.5rem"
                        size="md"
                        onClick={handlePasswordVisibility}
                        _hover={{
                          bg: "transparent",
                        }}
                        _active={{
                          bg: "transparent",
                        }}
                      >
                        {showPassword ? (
                          <Icon color={"white"}>
                            <ViewOffIcon />
                          </Icon>
                        ) : (
                          <Icon color={"white"}>
                            <ViewIcon />
                          </Icon>
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    isDisabled={isLoading}
                    type="submit"
                    color={"black"}
                    borderRadius={{ base: "15px" }}
                    mt={{ base: "1.5625rem" }}
                    p={{ base: "1.25rem" }}
                    _hover={{
                      color: "white",
                      bg: "black",
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress
                        isIndeterminate
                        size="1.5rem"
                        color="black"
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Flex>
              </Flex>
            </FormControl>
          </form>
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

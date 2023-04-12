import { useState } from "react";
import CustomInput from "@/components/CustomInput";
import ErrorMessage from "@/components/ErrorMessage";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
  Icon,
} from "@chakra-ui/react";

export default function StudentRegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const createAccount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    verifyPassword();
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(name);
    console.log(whatsapp);
  };

  const verifyPassword = () => {
    if (password !== confirmPassword) {
      setError("As senhas diferem.");
    }
  };

  return (
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
        <form onSubmit={createAccount}>
          <FormControl isRequired>
            <Text
              fontSize={{ base: "1.25rem" }}
              marginBottom={{ base: "1.25rem" }}
              textAlign={"center"}
            >
              Criar conta
            </Text>
            <Flex
              direction={"column"}
              minH={{ base: error ? "20rem" : "15rem" }}
              justify={"space-between"}
              gap={"1rem"}
            >
              <Flex direction={"column"}>
                {error && <ErrorMessage message={error} />}

                <CustomInput
                  value={email}
                  label={"E-mail"}
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  type={"email"}
                />
              </Flex>
              <Flex direction={"column"} gap={"1rem"}>
                <Flex direction={"column"}>
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <CustomInput
                      value={password}
                      onChange={(event) =>
                        setPassword(event.currentTarget.value)
                      }
                      type={showPassword ? "text" : "password"}
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
                </Flex>

                <Flex direction={"column"}>
                  <FormLabel>Confirmar senha</FormLabel>
                  <InputGroup>
                    <CustomInput
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.currentTarget.value)
                      }
                      type={showPassword ? "text" : "password"}
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
                </Flex>

                <Flex direction={"column"}>
                  <CustomInput
                    value={name}
                    label={"Nome completo"}
                    onChange={(event) => setName(event.target.value)}
                    type={"text"}
                  />
                </Flex>

                <Flex direction={"column"}>
                  <CustomInput
                    value={whatsapp}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    label={"Whatsapp"}
                    onChange={(event) => setWhatsapp(event.target.value)}
                    type={"tel"}
                  />
                </Flex>

                <Button
                  isDisabled={isLoading}
                  type="submit"
                  color={"black"}
                  borderRadius={{ base: "15px" }}
                  mt={{ base: "0.8rem" }}
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
                    "Criar conta!"
                  )}
                </Button>
              </Flex>
            </Flex>
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
}

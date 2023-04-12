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
import CustomTextArea from "@/components/CustomTextArea";
import CustomSelect from "@/components/CustomSelect";
import AvailableSchedule from "./components/AvailableSchedule";
import Legend from "./components/Legend";

interface ScheduleItem {
  weekDay: number;
  from: string;
  to: string;
}

export default function TeacherRegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const [subject, setSubject] = useState<string>("");
  const [cost, setCost] = useState<string>("");

  const [scheduleItems, setScheduleItems] = useState<Array<ScheduleItem>>([
    { weekDay: 0, from: "", to: "" },
  ]);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { weekDay: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const createAccount = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    verifyPassword();
    setLoading(false);
  };

  const verifyPassword = () => {
    if (password !== confirmPassword) {
      setError("As senhas diferem.");
    }
  };

  return (
    <Flex
      className="register-form-container"
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

            <Legend text="Digite seus dados cadastrais" />

            <Flex mt={{ base: "1rem" }} direction={"column"} gap={"1rem"}>
              {error && <ErrorMessage message={error} />}

              <Flex direction={"column"}>
                <CustomInput
                  value={email}
                  placeholder="Exemplo: fulanodasilva@exemplo.com"
                  label={"E-mail"}
                  onChange={(event) => setEmail(event.target.value)}
                  type={"email"}
                />
              </Flex>

              <Flex direction={"column"} gap={"1rem"}>
                <Flex direction={"column"}>
                  <FormLabel>Senha</FormLabel>
                  <InputGroup>
                    <CustomInput
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
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
                        setConfirmPassword(event.target.value)
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
              </Flex>

              <Flex direction={"column"}>
                <CustomInput
                  value={name}
                  placeholder="Exemplo: Fulano Da Silva"
                  label={"Nome completo"}
                  onChange={(event) => setName(event.target.value)}
                  type={"text"}
                />
              </Flex>

              <Flex direction={"column"}>
                <CustomInput
                  value={whatsapp}
                  placeholder="Exemplo: +55 (48) 99999-9999"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  label={"Whatsapp"}
                  onChange={(event) => setWhatsapp(event.target.value)}
                  type={"tel"}
                />
              </Flex>

              <Flex direction={"column"}>
                <CustomTextArea
                  value={bio}
                  label={"Biografia"}
                  onChange={(event) => setBio(event.target.value)}
                  placeholder={"Digite aqui um pouco sobre você..."}
                />
              </Flex>

              <Legend text="Sobre aulas" />

              <Flex direction={"column"}>
                <CustomSelect
                  value={subject}
                  label={"Matérias"}
                  onChange={(event) => setSubject(event.target.value)}
                  options={[
                    { value: "Artes", label: "Artes" },
                    { value: "Biologia", label: "Biologia" },
                    { value: "Ciências", label: "Ciências" },
                    { value: "Educação física", label: "Educação física" },
                    { value: "Física", label: "Física" },
                    { value: "Geografia", label: "Artes" },
                    { value: "História", label: "História" },
                    { value: "Matemática", label: "Matemática" },
                    { value: "Português", label: "Português" },
                    { value: "Química", label: "Química" },
                  ]}
                />
              </Flex>

              <Flex direction={"column"}>
                <CustomInput
                  value={cost}
                  placeholder="Exemplo: 42 ou 42,50"
                  label={"Custo da sua hora por aula"}
                  onChange={(event) => setCost(event.target.value)}
                  type={"number"}
                />
              </Flex>

              <Legend text="Horários disponíveis" />

              <Button color={"black"} onClick={addNewScheduleItem}>
                + Novo horário
              </Button>

              {scheduleItems.map(
                (scheduleItem: ScheduleItem, index: number) => {
                  return (
                    <Flex key={scheduleItem.weekDay} direction={"column"}>
                      <AvailableSchedule
                        selectOnChange={(event) =>
                          setScheduleItemValue(
                            index,
                            "week_day",
                            event.target.value
                          )
                        }
                        selectValue={scheduleItem.weekDay}
                        inputOnChange={(event) =>
                          setScheduleItemValue(
                            index,
                            "from",
                            event.target.value
                          )
                        }
                        inputValueFrom={scheduleItem.from}
                        inputValueTo={scheduleItem.to}
                      />
                    </Flex>
                  );
                }
              )}

              <Button
                isDisabled={isLoading}
                type="submit"
                color={"black"}
                borderRadius={{ base: "15px" }}
                mt={{ base: "0.8rem" }}
                mb={{ base: "2rem" }}
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
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
}

import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import TeacherIcon from "./../../assets/icons/teacher.svg";
import TeamIcon from "./../../assets/icons/team.svg";

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

function Landing() {
  const [selectedColor, setSelectedColor] = useState(bgColors[0]);

  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <Flex
        w={"100%"}
        bg={"primary.100"}
        justify={"space-between"}
        align={"center"}
        h={{ base: "5rem", sm: "6.875rem" }}
        position={"fixed"}
        paddingX={{ base: "10%", md: "10%" }}
        zIndex={"1"}
      >
        <Flex
          color={"white"}
          fontWeight={"bold"}
          fontSize={{ base: "1.25rem", sm: "1.4375rem", lg: "1.625rem" }}
        >
          Mathesis
        </Flex>
        <Flex>
          <Button
            borderRadius={"20px"}
            paddingX={{ base: "1.5625rem", sm: "1.875rem" }}
            paddingY={{ base: "1.25rem", sm: "1.5625rem" }}
            _hover={{
              color: "white",
              bg: "black",
            }}
            onClick={navigateToLoginPage}
          >
            Login
          </Button>
        </Flex>
      </Flex>

      <Flex
        w={"100%"}
        bg={"primary.100"}
        align={"center"}
        justify={"center"}
        h={{
          base: "47.5rem",
          sm: "55rem",
          xl: "51.25rem",
        }}
      >
        <Flex
          w={"60%"}
          direction={{ md: "column", xl: "row" }}
          align={"center"}
          justify={"space-around"}
        >
          <Image
            h={{
              base: "0px",
              md: "60%",
              xl: "80%",
              "2xl": "100%",
            }}
            w={{
              base: "0px",
              md: "31.25rem",
              xl: "80%",
              "2xl": "100%",
            }}
            marginTop={"7.5rem"}
            src={TeacherIcon}
            alt={"Professor com alunos"}
            display={{ base: "none", sm: "flex" }}
          />
          <Flex direction={"column"} align={"center"}>
            <Text
              color={"white"}
              fontWeight={"bold"}
              fontSize={{
                base: "2.5rem",
                "2xl": "3rem",
              }}
              textAlign={"center"}
              paddingY={{ base: "2.5rem", sm: "3rem" }}
            >
              Somos melhores juntos!
            </Text>

            <Text
              color={"white"}
              width={{ base: "21.875rem", sm: "100%", md: "35rem" }}
              textAlign={"center"}
              fontSize={{
                base: "1.25rem",
                "2xl": "1.375rem",
              }}
            >
              Mathesis te ajuda a encontrar professores para marcar aulas
              particulares, de maneira eficiente, fácil e rápida. Diga adeus a
              suas dúvidas e busque agora por um profissional para te ajudar!
            </Text>

            <Button
              width={"12.5rem"}
              marginTop={{ base: "3.125rem", sm: "1.875rem" }}
              borderRadius={"20px"}
              paddingX={"1.875rem"}
              paddingY={"1.5625rem"}
              _hover={{
                color: "white",
                bg: "black",
              }}
            >
              Criar conta
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        bg={"white"}
        align={"center"}
        justify={"center"}
        h={{ base: "39.0625rem", sm: "50rem" }}
      >
        <Flex
          w={"65%"}
          direction={{ md: "column", xl: "row" }}
          justify={"space-around"}
          align={"center"}
        >
          <Flex direction={"column"} align={"center"}>
            <Text
              fontWeight={"bold"}
              fontSize={{
                base: "2.5rem",
                "2xl": "3rem",
              }}
              textAlign={"center"}
              paddingTop={{ base: "0px", sm: "5rem" }}
              paddingBottom={{ base: "2.8125rem", sm: "2.5rem" }}
            >
              Queremos te ajudar!
            </Text>
            <Text
              width={{ base: "21.875rem", sm: "100%", md: "35rem" }}
              textAlign={"center"}
              fontSize={{
                base: "1.25rem",
                "2xl": "1.375rem",
              }}
            >
              Nossa missão é te ajudar da melhor forma possível. Navegue pela
              plataforma e encontre os melhores profissionais.
            </Text>
            <Button
              background={"primary.100"}
              marginTop={{ base: "3.75rem", sm: "3.125rem" }}
              borderRadius={"20px"}
              paddingX={"3.75rem"}
              paddingY={"1.5625rem"}
              color={"white"}
              _hover={{
                background: "primary.100",
              }}
            >
              Sobre nós
            </Button>
          </Flex>
          <Image
            src={TeamIcon}
            alt={"Equipe"}
            display={{ base: "none", sm: "flex" }}
            marginTop={"0px"}
            w={{ base: "0px", md: "60%", xl: "60%" }}
            h={{ base: "0px", md: "31.25rem", xl: "60%" }}
          />
        </Flex>
      </Flex>
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
    </>
  );
}

export default Landing;

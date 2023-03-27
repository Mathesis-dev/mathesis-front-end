import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
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

  return (
    <>
      <Flex
        w={"100%"}
        bg={"#6E4AFF"}
        justify={"space-around"}
        align={"center"}
        h={{ base: "0px", md: "0px", lg: "110px" }}
        position={"fixed"}
      >
        <Flex color={"white"} fontWeight={"bold"} fontSize={"23px"}>
          Mathesis
        </Flex>
        <Flex>
          <Button
            borderRadius={"20px"}
            paddingX={"30px"}
            paddingY={"25px"}
            _hover={{
              color: "white",
              bg: "black",
            }}
          >
            Login
          </Button>
        </Flex>
      </Flex>

      <Flex
        w={"100%"}
        bg={"#6E4AFF"}
        align={"center"}
        justify={"center"}
        h={{ base: "0px", xl: "490px", "2xl": "820px" }}
      >
        <Flex w={"60%"} align={"center"} justify={"space-around"}>
          <Image
            marginTop={"120px"}
            src={TeacherIcon}
            alt={"Professor com alunos"}
          />
          <Flex direction={"column"} align={"center"}>
            <Text
              color={"white"}
              fontWeight={"bold"}
              fontSize={{ base: "0px", md: "48px" }}
              textAlign={"center"}
              paddingY={{ base: "0px", md: "48px" }}
            >
              Somos melhores juntos!
            </Text>

            <Text
              color={"white"}
              width={{ base: "0px", md: "560px" }}
              textAlign={"center"}
              fontSize={{ base: "0px", md: "22px" }}
            >
              Mathesis te ajuda a encontrar professores para marcar aulas
              particulares, de maneira eficiente, fácil e rápida. Diga adeus a
              suas dúvidas e busque agora por um profissional para te ajudar!
            </Text>

            <Button
              width={"200px"}
              marginTop={{ base: "0px", md: "30px" }}
              borderRadius={"20px"}
              paddingX={"30px"}
              paddingY={"25px"}
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
        h={{ base: "0px", xl: "490px", "2xl": "720px" }}
      >
        <Flex w={"65%"} justify={"space-around"}>
          <Flex direction={"column"} align={"center"}>
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "0px", md: "48px" }}
              textAlign={"center"}
              paddingTop={{ base: "0px", md: "80px" }}
              paddingBottom={{ base: "0px", md: "40px" }}
            >
              Queremos te ajudar
            </Text>
            <Text
              width={{ base: "0px", md: "560px" }}
              textAlign={"center"}
              fontSize={{ base: "0px", md: "22px" }}
            >
              Nossa missão é te ajudar da melhor forma possível. Navegue pela
              plataforma e encontre os melhores profissionais
            </Text>
            <Button
              background={"#6E4AFF"}
              marginTop={{ base: "0px", md: "50px" }}
              borderRadius={"20px"}
              paddingX={"60px"}
              paddingY={"25px"}
              color={"white"}
              _hover={{
                background: "#6E4AFF",
              }}
            >
              Sobre nós
            </Button>
          </Flex>
          <Image src={TeamIcon} alt={"Equipe"} />
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        align={"center"}
        justify={"space-around"}
        h={{ base: "0px", xl: "200px", "2xl": "250px" }}
        bg={"#1F173F"}
      >
        <Button
          borderRadius={"0px"}
          width={"300px"}
          height={"100px"}
          bg={selectedColor}
          color={"white"}
          fontSize={"26px"}
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
        <Flex width={"350px"} justify={"space-around"}>
          <Text cursor={"pointer"} color={"white"} fontSize={"18px"}>
            Criar conta
          </Text>
          <Text cursor={"pointer"} color={"white"} fontSize={"18px"}>
            Login
          </Text>
          <Text cursor={"pointer"} color={"white"} fontSize={"18px"}>
            Sobre nós
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;

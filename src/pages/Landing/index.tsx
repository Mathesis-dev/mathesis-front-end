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
        bg={"#6E4AFF"}
        justify={"space-between"}
        align={"center"}
        h={{ base: "80px", sm: "110px" }}
        position={"fixed"}
        paddingX={{ base: "10%", md: "10%" }}
        zIndex={"1"}
      >
        <Flex
          color={"white"}
          fontWeight={"bold"}
          fontSize={{ base: "20px", sm: "23px", lg: "26px" }}
        >
          Mathesis
        </Flex>
        <Flex>
          <Button
            borderRadius={"20px"}
            paddingX={{ base: "25px", sm: "30px" }}
            paddingY={{ base: "20px", sm: "25px" }}
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
        bg={"#6E4AFF"}
        align={"center"}
        justify={"center"}
        h={{
          base: "760px",
          sm: "880px",
          xl: "820px",
          "2xl": "820px",
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
              md: "500px",
              xl: "80%",
              "2xl": "100%",
            }}
            marginTop={"120px"}
            src={TeacherIcon}
            alt={"Professor com alunos"}
            display={{ base: "none", sm: "flex" }}
          />
          <Flex direction={"column"} align={"center"}>
            <Text
              color={"white"}
              fontWeight={"bold"}
              fontSize={{
                base: "40px",
                "2xl": "48px",
              }}
              textAlign={"center"}
              paddingY={{ base: "40px", sm: "48px" }}
            >
              Somos melhores juntos!
            </Text>

            <Text
              color={"white"}
              width={{ base: "350px", sm: "100%", md: "560px" }}
              textAlign={"center"}
              fontSize={{
                base: "20px",
                "2xl": "22px",
              }}
            >
              Mathesis te ajuda a encontrar professores para marcar aulas
              particulares, de maneira eficiente, fácil e rápida. Diga adeus a
              suas dúvidas e busque agora por um profissional para te ajudar!
            </Text>

            <Button
              width={"200px"}
              marginTop={{ base: "50px", sm: "30px" }}
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
        h={{ base: "625px", sm: "800px", "2xl": "800px" }}
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
                base: "40px",
                "2xl": "48px",
              }}
              textAlign={"center"}
              paddingTop={{ base: "0px", sm: "80px" }}
              paddingBottom={{ base: "45px", sm: "40px" }}
            >
              Queremos te ajudar!
            </Text>
            <Text
              width={{ base: "350px", sm: "100%", md: "560px" }}
              textAlign={"center"}
              fontSize={{
                base: "20px",
                "2xl": "22px",
              }}
            >
              Nossa missão é te ajudar da melhor forma possível. Navegue pela
              plataforma e encontre os melhores profissionais.
            </Text>
            <Button
              background={"#6E4AFF"}
              marginTop={{ base: "60px", sm: "50px" }}
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
          <Image
            src={TeamIcon}
            alt={"Equipe"}
            display={{ base: "none", sm: "flex" }}
            marginTop={{ base: "0px", md: "0px", xl: "0px" }}
            w={{ base: "0px", md: "60%", xl: "60%" }}
            h={{ base: "0px", md: "500px", xl: "60%" }}
          />
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        align={"center"}
        justify={"space-around"}
        h={{ base: "80px", sm: "200px" }}
        bg={"#1F173F"}
      >
        <Button
          borderRadius={"0px"}
          width={{ base: "0px", md: "200px", lg: "300px" }}
          height={{ base: "0px", md: "100px" }}
          display={{ base: "none", md: "flex" }}
          bg={selectedColor}
          color={"white"}
          fontSize={{ base: "18px", lg: "26px" }}
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
          <Text
            cursor={"pointer"}
            color={"white"}
            fontSize={{ base: "16px", sm: "18px" }}
          >
            Criar conta
          </Text>
          <Text
            cursor={"pointer"}
            color={"white"}
            fontSize={{ base: "16px", sm: "18px" }}
          >
            Login
          </Text>
          <Text
            cursor={"pointer"}
            color={"white"}
            fontSize={{ base: "16px", sm: "18px" }}
          >
            Sobre nós
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;

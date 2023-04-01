import { Button, Flex, Image, Text } from "@chakra-ui/react";
import TeacherIcon from "../../../../assets/icons/teacher.svg";

export default function BetterTogether() {
  return (
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
  );
}

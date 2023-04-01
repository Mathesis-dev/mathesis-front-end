import { Button, Flex, Image, Text } from "@chakra-ui/react";
import TeamIcon from "../../../../assets/icons/team.svg";

export default function WannaHelp() {
  return (
    <Flex
      w={"100%"}
      bg={"white"}
      align={"center"}
      justify={"center"}
      h={{ base: "39.0625rem", sm: "38rem" }}
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
  );
}

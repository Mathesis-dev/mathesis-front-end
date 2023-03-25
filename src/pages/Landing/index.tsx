import { Button, CardHeader, Flex } from "@chakra-ui/react";

function Landing() {
  return (
    <>
      <Flex
        w={"100%"}
        bg={"#6E4AFF"}
        justify={"space-around"}
        align={"center"}
        h={"110px"}
      >
        <Flex color={"white"} fontWeight={"bold"} fontSize={"23px"}>
          Mathesis
        </Flex>
        <Flex>
          <Button borderRadius={"20px"} paddingX={"30px"} paddingY={"25px"}>
            Log In
          </Button>
        </Flex>
      </Flex>

      <Flex
        w={"100%"}
        bg={"#6E4AFF"}
        justify={"space-around"}
        align={"center"}
        h={"590px"}
      ></Flex>
    </>
  );
}

export default Landing;

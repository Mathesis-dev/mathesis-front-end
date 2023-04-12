import { Button, Flex, Text } from "@chakra-ui/react";
import SignPagesHeader from "@/components/SignPagesHeader";
import TeacherRegisterForm from "./TeacherRegisterForm";
import { useState } from "react";
import StudentRegisterForm from "./StudentRegisterForm";

enum Tabs {
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
}

export default function Register() {
  const [tab, setTab] = useState<Tabs>();

  return (
    <Flex
      className="page-container"
      w={tab === Tabs.TEACHER ? "100%" : "100vw"}
      h={tab === Tabs.TEACHER ? "100%" : "100vh"}
      direction={"column"}
      bg={"primary.200"}
    >
      <>
        <SignPagesHeader />
        {tab === Tabs.TEACHER ? (
          <TeacherRegisterForm />
        ) : tab === Tabs.STUDENT ? (
          <StudentRegisterForm />
        ) : (
          <Flex
            h={"100%"}
            justify={"center"}
            align={"center"}
            fontSize={{
              base: "1.2rem",
              sm: "1.4rem",
              md: "1.6rem",
              "2xl": "2rem",
            }}
          >
            <Text color={"white"}>
              Você é{" "}
              <Button
                p={{
                  base: "1.2rem",
                  sm: "1.4rem",
                  md: "1.6rem",
                  "2xl": "2rem",
                }}
                fontSize={{
                  base: "1.2rem",
                  sm: "1.4rem",
                  md: "1.6rem",
                  "2xl": "2rem",
                }}
                borderRadius={"15px"}
                color={"black"}
                _hover={{ bg: "black", color: "white" }}
                onClick={() => setTab(Tabs.STUDENT)}
              >
                aluno
              </Button>{" "}
              ou{" "}
              <Button
                p={{
                  base: "1.2rem",
                  sm: "1.4rem",
                  md: "1.6rem",
                  "2xl": "2rem",
                }}
                fontSize={{
                  base: "1.2rem",
                  sm: "1.4rem",
                  md: "1.6rem",
                  "2xl": "2rem",
                }}
                borderRadius={"15px"}
                color={"black"}
                _hover={{ bg: "black", color: "white" }}
                onClick={() => setTab(Tabs.TEACHER)}
              >
                professor
              </Button>{" "}
              ?
            </Text>
          </Flex>
        )}
      </>
    </Flex>
  );
}

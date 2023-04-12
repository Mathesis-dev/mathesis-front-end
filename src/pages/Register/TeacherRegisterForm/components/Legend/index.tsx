import { Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

export default function Legend({ text }: Props) {
  return (
    <>
      <Text
        pb={{ base: "1rem" }}
        borderBottom={"1px solid rgba(235, 235, 245, 0.2)"}
      >
        {text}
      </Text>
    </>
  );
}

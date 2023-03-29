import { Alert, AlertDescription, AlertIcon, Box } from "@chakra-ui/react";

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription color={"black"}>{message}</AlertDescription>
      </Alert>
    </Box>
  );
}

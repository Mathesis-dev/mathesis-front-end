import { FormLabel, Textarea } from "@chakra-ui/react";

interface Props {
  label?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
}

export default function CustomTextArea({
  label,
  onChange,
  placeholder,
}: Props) {
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <Textarea
        placeholder={placeholder}
        onChange={onChange}
        borderRadius={{ base: "15px" }}
        borderColor={"shadow.100"}
        _hover={{
          borderColor: "primary.100",
          boxShadow: "primary.100",
        }}
        _focusVisible={{
          borderColor: "primary.100",
          boxShadow: "primary.100",
        }}
      />
    </>
  );
}

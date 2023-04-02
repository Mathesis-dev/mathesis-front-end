import { FormLabel, Input } from "@chakra-ui/react";

interface Props {
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  pattern?: string;
  placeholder?: string;
}

export default function CustomInput({
  label,
  onChange,
  type,
  pattern,
  placeholder,
}: Props) {
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <Input
        placeholder={placeholder}
        pattern={pattern}
        onChange={onChange}
        type={type}
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

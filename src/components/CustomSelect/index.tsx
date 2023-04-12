import { FormLabel, Select } from "@chakra-ui/react";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  label?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Array<Option>;
  placeholder?: string;
  value: string;
}

export default function CustomSelect({
  label,
  onChange,
  options,
  placeholder,
  value,
}: Props) {
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <Select
        value={value}
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
      >
        {options.map((option: Option) => {
          return (
            <option
              style={{ backgroundColor: "#1F173F" }}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </Select>
    </>
  );
}

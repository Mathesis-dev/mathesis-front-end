import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import { Flex } from "@chakra-ui/react";

interface Props {
  selectOnChange: React.ChangeEventHandler<HTMLSelectElement>;
  selectValue: any;
  inputOnChange: React.ChangeEventHandler<HTMLInputElement>;
  inputValueFrom: string;
  inputValueTo: string;
}

export default function AvailableSchedule({
  selectOnChange,
  selectValue,
  inputOnChange,
  inputValueFrom,
  inputValueTo,
}: Props) {
  return (
    <Flex direction={"column"} gap={{ base: "1rem" }}>
      <Flex direction={"column"}>
        <CustomSelect
          value={selectValue}
          label="Dia da semana"
          onChange={selectOnChange}
          options={[
            { value: "0", label: "Domingo" },
            { value: "1", label: "Segunda-feira" },
            { value: "2", label: "Terça-feira" },
            { value: "3", label: "Quarta-feira" },
            { value: "4", label: "Quinta-feira" },
            { value: "5", label: "Sexta-feira" },
            { value: "6", label: "Sábado" },
          ]}
        />
      </Flex>

      <Flex direction={"column"}>
        <CustomInput
          type="time"
          label="Hora inicial"
          value={inputValueFrom}
          onChange={inputOnChange}
        />
      </Flex>

      <Flex direction={"column"}>
        <CustomInput
          type="time"
          label="Hora final"
          value={inputValueTo}
          onChange={inputOnChange}
        />
      </Flex>
    </Flex>
  );
}

import { useController, UseControllerProps } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';

interface Props extends UseControllerProps<any> {
  label: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export default function ControlledCheckbox({
  label,
  disabled,
  readOnly,
  ...props
}: Props) {
  const { field } = useController(props);

  return (
    <FormControlLabel
      label={label}
      disabled={disabled}
      control={
        <Checkbox
          {...field}
          disabled={disabled}
          readOnly={readOnly}
          checked={field.value ? true : false}
        />
      }
    />
  );
}

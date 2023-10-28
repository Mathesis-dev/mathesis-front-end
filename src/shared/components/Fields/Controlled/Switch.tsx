import { useController, UseControllerProps } from 'react-hook-form';
import { FormControlLabel, Switch } from '@mui/material';

interface Props extends UseControllerProps<any> {
  label?: string;
  disabled?: boolean;
}

export default function ControlledSwitch({ label, disabled, ...props }: Props) {
  const { field } = useController(props);

  return (
    <FormControlLabel
      label={label}
      disabled={disabled}
      sx={{ width: '100%' }}
      control={<Switch {...field} checked={field.value ? true : false} />}
    />
  );
}

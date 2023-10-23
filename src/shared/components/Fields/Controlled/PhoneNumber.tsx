import { useController, UseControllerProps } from 'react-hook-form';
import { Phone } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react';

interface Props extends UseControllerProps<any> {
  placeholder?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  label?: string;
  size?: 'medium' | 'small';
}

const TextMask = forwardRef<HTMLElement, any>(function TextMask(props, ref) {
  const { mask, ...other } = props;
  return <IMaskInput {...other} mask={mask} inputRef={ref} />;
});

export default function ControlledPhoneNumber({
  placeholder = '____-____',
  label = 'Telefone',
  fullWidth = true,
  size = 'small',
  readOnly,
  disabled,
  ...props
}: Props) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  function handleDispatch(appended: string, masked: IMask.MaskedDynamic) {
    const value = masked.value + appended;

    field.onChange(value);
    return value.length >= 10
      ? masked.compiledMasks[1]
      : masked.compiledMasks[0];
  }

  return (
    <TextField
      {...field}
      size={size}
      label={label}
      error={!!error}
      disabled={disabled}
      fullWidth={fullWidth}
      placeholder={placeholder}
      helperText={error?.message}
      InputProps={{
        readOnly: readOnly,
        endAdornment: <Phone />,
        inputComponent: TextMask,
        inputProps: {
          mask: [{ mask: '0000-0000' }, { mask: '00000-0000' }],
          dispatch: handleDispatch,
        },
      }}
    />
  );
}

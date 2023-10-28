import { TextField, Typography } from '@mui/material';
import { ReactNode, forwardRef, useRef } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

interface Props extends UseControllerProps<any> {
  setFormat?: (v: boolean) => void;
  placeholder?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  size?: 'medium' | 'small';
  label: string;
  currencySymbol?: string | ReactNode;
  color?: string;
  borderColor?: string;
  hoverColor?: string;
}

const NumberMask = forwardRef<HTMLElement, any>(function NumberMask(
  props,
  ref
) {
  const { mask, ...other } = props;
  return <IMaskInput {...other} mask={mask} inputRef={ref} max={99999999} />;
});

export default function ControlledMonetary({
  fullWidth = true,
  size = 'small',
  setFormat,
  placeholder,
  readOnly,
  disabled,
  label,
  currencySymbol = 'R$',
  color,
  borderColor,
  hoverColor,
  ...props
}: Props) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  const ref = useRef<HTMLInputElement>(null);

  function handleSelect() {
    ref?.current?.select();
  }

  return (
    <TextField
      {...field}
      inputRef={ref}
      size={size}
      label={label}
      error={!!error}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={handleSelect}
      placeholder={placeholder}
      helperText={error?.message}
      sx={{
        '&:hover': {
          '& .MuiOutlinedInput-root': {
            '& > fieldset': { borderColor: hoverColor },
          },
        },
        input: { color: color },
        '& .MuiInputLabel-root': { color: color },
        '& .MuiOutlinedInput-root': {
          '& > fieldset': { borderColor: borderColor },
        },
      }}
      InputProps={{
        startAdornment:
          typeof currencySymbol === `string` ? (
            <Typography sx={{ color: color }}>{currencySymbol}</Typography>
          ) : (
            currencySymbol
          ),
        inputComponent: NumberMask,
        readOnly: readOnly,
        inputProps: {
          mask: Number,
          scale: 2,
          signed: false,
          mapToRadix: ['.'],
          normalizeZeros: true,
          thousandsSeparator: '',
          padFractionalZeros: true,
          radix: ',',
          min: 0,
          max: 1000000,
        },
      }}
    />
  );
}

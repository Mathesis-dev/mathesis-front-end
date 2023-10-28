import { forwardRef, ReactNode } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { TextField } from '@mui/material';
import { IMaskInput } from 'react-imask';

interface Props extends UseControllerProps<any> {
  placeholder?: string;
  multiline?: boolean;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  size?: 'medium' | 'small';
  mask?: string | Array<{ mask: string }>;
  minRows?: number;
  maxRows?: number;
  label: string;
  maxLength?: number;
  color?: string;
  borderColor?: string;
  hoverColor?: string;
}

const TextMask = forwardRef<HTMLElement, any>(function TextMask(props, ref) {
  const { mask, ...other } = props;
  return <IMaskInput {...other} mask={mask} inputRef={ref} />;
});

export default function ControlledText({
  placeholder = 'Digite aqui...',
  fullWidth = true,
  size = 'small',
  multiline,
  disabled,
  readOnly,
  label,
  icon,
  mask,
  minRows,
  maxRows,
  maxLength,
  color,
  borderColor,
  hoverColor,
  ...props
}: Props) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <TextField
      {...field}
      minRows={minRows ?? 4}
      maxRows={maxRows}
      size={size}
      label={label}
      error={!!error}
      disabled={disabled}
      fullWidth={fullWidth}
      multiline={multiline}
      placeholder={placeholder}
      helperText={error?.message}
      sx={{
        '&:hover': {
          '& .MuiOutlinedInput-root': {
            '& > fieldset': { borderColor: hoverColor },
          },
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root': {
          color: color,
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root ::placeholder': {
          color: color,
        },
        input: { color: color },
        '& .MuiInputLabel-root': { color: color },
        '& .MuiOutlinedInput-root': {
          '& > fieldset': { borderColor: borderColor },
        },
      }}
      InputProps={{
        readOnly: readOnly,
        endAdornment: icon,
        inputComponent: mask ? TextMask : undefined,
        inputProps: {
          mask: mask,
          maxLength: maxLength,
        },
      }}
    />
  );
}

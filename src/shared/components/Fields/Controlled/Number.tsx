import { forwardRef, ReactNode } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import {
  Box,
  InputAdornment,
  SxProps,
  TextField,
  Tooltip,
} from '@mui/material';
import { HelpOutline } from '@mui/icons-material';

interface Props extends UseControllerProps<any> {
  placeholder?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  size?: 'medium' | 'small';
  variant?: 'standard' | 'outlined' | 'filled';
  label?: string;
  scale?: number;
  signed?: boolean;
  thousandsSeparator?: string;
  padFractionalZeros?: boolean;
  normalizeZeros?: boolean;
  radix?: string;
  mapToRadix?: Array<string>;
  min?: number;
  max?: number;
  sx?: SxProps;
  helper?: string | ReactNode;
}

const NumberMask = forwardRef<HTMLElement, any>(function NumberMask(
  props,
  ref
) {
  const { mask, ...other } = props;
  return <IMaskInput {...other} mask={mask} inputRef={ref} />;
});

export default function ControlledNumber({
  placeholder = 'Digite aqui...',
  fullWidth = true,
  size = 'small',
  variant,
  readOnly,
  disabled,
  icon,
  label,
  scale = 2,
  signed = false,
  thousandsSeparator = '',
  padFractionalZeros = false,
  normalizeZeros = true,
  radix = ',',
  mapToRadix = ['.'],
  min = -10000,
  max = 10000,
  sx,
  helper,
  ...props
}: Props) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <Box display="flex" gap={1} alignItems="start">
      <TextField
        {...field}
        variant={variant}
        size={size}
        label={label}
        error={!!error}
        disabled={disabled}
        fullWidth={fullWidth}
        placeholder={placeholder}
        helperText={error?.message}
        InputProps={{
          readOnly: readOnly,
          endAdornment:
            icon && field.value ? (
              <InputAdornment position="end" sx={{ color: 'inherit' }}>
                {icon}
              </InputAdornment>
            ) : undefined,
          inputComponent: NumberMask,
          inputProps: {
            style: { textAlign: 'end' },
            mask: Number,
            scale: scale, // digits after point, 0 for integers
            signed: signed, // disallow negative
            thousandsSeparator: thousandsSeparator, // any single char
            padFractionalZeros: padFractionalZeros, // if true, then pads zeros at end to the length of scale
            normalizeZeros: normalizeZeros, // appends or removes zeros at ends
            radix: radix, // fractional delimiter
            mapToRadix: mapToRadix, // symbols to process as radix

            // additional number interval options (e.g.)
            min: min,
            max: max,
          },
          sx,
        }}
      />
      {helper && (
        <Box
          display="flex"
          alignItems="center"
          height={size === 'small' ? '40px' : '56px'}
        >
          <Tooltip arrow placement="bottom-end" title={helper}>
            <HelpOutline sx={{ color: 'text.primary' }} />
          </Tooltip>
        </Box>
      )}
    </Box>
  );
}

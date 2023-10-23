import {
  ChangeEvent,
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { debounce, TextField } from '@mui/material';
import { IMaskInput } from 'react-imask';

interface Props extends UseControllerProps<any> {
  placeholder?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  size?: 'medium' | 'small';
  mask?: string | Array<{ mask: string }>;
  label: string;
}

const TextMask = forwardRef<HTMLElement, any>(function TextMask(props, ref) {
  const { mask, ...other } = props;
  return <IMaskInput {...other} mask={mask} inputRef={ref} />;
});

export default function ControlledDebounce({
  placeholder = 'Digite aqui...',
  fullWidth = true,
  size = 'small',
  readOnly,
  disabled,
  label,
  mask,
  icon,
  ...props
}: Props) {
  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController(props);

  const [debounceValue, setDebounceValue] = useState<string>('');

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event);
  }

  const handleDebounce = debounce(handleOnChange, 1500);

  const handleOnChangeDebounce = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.persist();
      setDebounceValue(event.target.value);
      handleDebounce(event);
    },
    [handleDebounce]
  );

  useEffect(() => {
    if (value && typeof value === 'string') setDebounceValue(value);
  }, [value]);

  return (
    <TextField
      {...field}
      size={size}
      label={label}
      error={!!error}
      disabled={disabled}
      value={debounceValue}
      fullWidth={fullWidth}
      placeholder={placeholder}
      helperText={error?.message}
      onChange={handleOnChangeDebounce}
      InputProps={{
        autoComplete: 'off',
        readOnly: readOnly,
        endAdornment: icon,
        inputComponent: mask ? TextMask : undefined,
        inputProps: {
          mask: mask,
        },
      }}
    />
  );
}

import { UseControllerProps, useController } from 'react-hook-form';
import { Autocomplete, Box, LinearProgress, TextField } from '@mui/material';
import IOption from '@/shared/domain/interfaces/IOption';
import { Fragment, useState } from 'react';

interface Props extends UseControllerProps<any> {
  placeholder?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: 'medium' | 'small';
  mask?: string | Array<{ mask: string }>;
  options: Array<IOption<any>>;
  label: string;
}

export default function ControlledAutocomplete({
  placeholder = 'Digite para buscar...',
  fullWidth = true,
  size = 'small',
  readOnly,
  disabled,
  options,
  loading,
  label,
  mask,
  ...props
}: Props) {
  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController(props);

  const [selected, setSelected] = useState<IOption<string> | null>(
    options.find((option) => option.value === value) ?? null
  );

  if (disabled)
    return (
      <TextField
        size={size}
        label={label}
        error={!!error}
        disabled={disabled}
        fullWidth={fullWidth}
        placeholder={placeholder}
        value={selected?.label ?? ''}
        helperText={error?.message}
      />
    );

  return (
    <Autocomplete
      value={selected}
      options={options}
      loading={loading}
      readOnly={readOnly}
      fullWidth={fullWidth}
      onChange={(_, data) => {
        onChange(data?.value);
        setSelected(data);
      }}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, selected) =>
        option.value == selected.value
      }
      renderInput={(params) => (
        <Fragment>
          <TextField
            {...field}
            {...params}
            size={size}
            label={label}
            error={!!error}
            placeholder={placeholder}
            helperText={error?.message}
          />
          {loading ? (
            <LinearProgress
              sx={{
                width: '100%',
                transform: 'translateY(-4px)',
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
              }}
            />
          ) : (
            <Box height="4px" />
          )}
        </Fragment>
      )}
    />
  );
}

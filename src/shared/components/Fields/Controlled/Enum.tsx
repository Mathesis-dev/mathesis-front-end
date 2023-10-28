import { ReactNode, useEffect, useState } from 'react';
import { Autocomplete, Box, TextField, Tooltip } from '@mui/material';
import { UseControllerProps, useController } from 'react-hook-form';
import IOption from '@/shared/domain/interfaces/IOption';
import { HelpOutline } from '@mui/icons-material';

interface Props extends UseControllerProps<any> {
  disableClearable?: boolean;
  placeholder?: string;
  translate?: Record<string, string>;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  options: Record<string, string>;
  helper?: string | ReactNode;
  size?: 'medium' | 'small';
  label: string;
}

export default function ControlledEnum({
  placeholder = 'Selecione uma opção.',
  fullWidth = true,
  size = 'small',
  disableClearable,
  translate,
  disabled,
  readOnly,
  multiple,
  options,
  helper,
  label,
  ...props
}: Props) {
  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController(props);

  const [selected, setSelected] = useState<IOption<string> | null>(null);

  const [selectees, setSelectees] = useState<Array<IOption<string>>>([]);

  const formattedOptions = Object.entries(options).map(([key, value]) => ({
    label: key,
    value: value,
  }));

  function handleChange(data: IOption<string> | IOption<string>[] | null) {
    multiple
      ? setSelectees((data as Array<IOption<string>> | null) ?? [])
      : setSelected(data as IOption<string> | null);

    onChange(
      multiple
        ? (data as Array<IOption<string>> | null)?.map(({ value }) => value) ??
            []
        : (data as IOption<string> | null)?.value ?? ''
    );
  }

  function EnumKeyToLabel(key: string): string {
    if (translate) return translate[key];

    return key
      .split('_')
      .map((label) => label.toLowerCase())
      .map((label) => {
        const first = label.at(0);
        if (first) return label.replace(first, first.toUpperCase());
        return label;
      })
      .join(' ');
  }

  function formatLabel(key: string | null): string {
    if (!key) return '';

    return EnumKeyToLabel(key);
  }

  useEffect(() => {
    multiple
      ? setSelectees(
          formattedOptions.filter(
            (option) => !!value && value.includes(option.value)
          )
        )
      : setSelected(
          formattedOptions.find((option) => option.value == value) ?? null
        );
  }, [value]);

  if (disabled)
    return (
      <TextField
        size={size}
        label={label}
        error={!!error}
        disabled={disabled}
        fullWidth={fullWidth}
        placeholder={placeholder}
        helperText={error?.message}
        value={
          multiple
            ? selectees.map((v) => formatLabel(v?.label || null)).join(', ')
            : formatLabel(selected?.label || null)
        }
      />
    );

  return (
    <Autocomplete
      {...field}
      size={size}
      disableClearable={disableClearable}
      multiple={multiple}
      disabled={disabled}
      readOnly={readOnly}
      fullWidth={fullWidth}
      options={formattedOptions}
      value={multiple ? selectees : selected}
      onChange={(_, data) =>handleChange(data as IOption<string> | IOption<string>[] | null)
      }
      getOptionLabel={(option) => formatLabel(option.label)}
      isOptionEqualToValue={(option, selected) =>
        option.value == selected.value
      }
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.value}>
            {formatLabel(option.label)}
          </li>
        );
      }}
      renderInput={(params) => (
        <Box display="flex" gap={1} alignItems="start">
          <TextField
            {...params}
            label={label}
            error={!!error}
            placeholder={placeholder}
            helperText={error?.message}
            sx={{
              '& .MuiInputBase-root': {
                gap: '2px',
              },
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
      )}
    />
  );
}

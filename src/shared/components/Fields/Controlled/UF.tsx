import { Autocomplete, Box, LinearProgress, TextField } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import useSWR from 'swr';

import UF from '@/shared/domain/entities/UF';
import BrazilRepository from '@/shared/repositories/BrazilRepository';
import { ArrowDropDown, CloseOutlined } from '@mui/icons-material';

interface Props extends UseControllerProps<any> {
  placeholder?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  size?: 'medium' | 'small';
  multiple?: boolean;
  label?: string;
  color?: string;
  borderColor?: string;
  hoverColor?: string;
}

export default function ControlledUF({
  placeholder = 'Digite para buscar...',
  fullWidth = true,
  size = 'small',
  readOnly,
  disabled,
  multiple,
  label,
  color,
  borderColor,
  hoverColor,
  ...props
}: Props) {
  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController(props);

  const [options, setOptions] = useState<Array<UF>>([]);

  const [selected, setSelected] = useState<UF | null>(null);
  const [selectees, setSelectees] = useState<Array<UF>>([]);

  const repository = new BrazilRepository();

  const { data, isLoading } = useSWR(!options.length ? 'UFs' : null, () =>
    repository.states()
  );

  function handleChange(data: UF | Array<UF> | null) {
    multiple
      ? setSelectees((data as Array<UF> | null) ?? [])
      : setSelected(data as UF | null);

    onChange(
      multiple
        ? (data as Array<UF> | null)?.map(({ acronym }) => acronym) ?? []
        : (data as UF | null)?.acronym ?? ''
    );
  }

  useEffect(() => {
    if (data) setOptions(data);
  }, [data]);

  useEffect(() => {
    if (multiple) {
      setSelectees(
        options.filter((option) => !!value && value.includes(option.acronym)) ??
          []
      );
    } else {
      setSelected(options.find((option) => option.acronym === value) ?? null);
    }
  }, [value, options]);

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
            ? selectees.map((s) => s.name).join(', ')
            : selected?.name ?? ''
        }
      />
    );

  return (
    <Autocomplete
      {...field}
      clearIcon={<CloseOutlined sx={{ color: color }} />}
      popupIcon={<ArrowDropDown sx={{ color: color }} />}
      size={size}
      multiple={multiple}
      value={multiple ? selectees : selected}
      loading={isLoading}
      disabled={disabled}
      readOnly={readOnly}
      fullWidth={fullWidth}
      onChange={(_, data) => handleChange(data)}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, selected) =>
        option.acronym == selected.acronym
      }
      options={options}
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
      renderInput={(params) => (
        <Fragment>
          <TextField
            {...field}
            {...params}
            label={label}
            error={!!error}
            placeholder={placeholder}
            helperText={error?.message}
            sx={{
              '& .MuiInputBase-root': {
                gap: '0',
              },
            }}
          />
          {isLoading ? (
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

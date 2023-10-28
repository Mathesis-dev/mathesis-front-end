import { Fragment, useEffect, useState } from 'react';
import {
  UseControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form';
import { Autocomplete, Box, LinearProgress, TextField } from '@mui/material';
import useSWR from 'swr';

import { normalizeString } from '@/shared/utils/String';
import BrazilRepository from '@/shared/repositories/BrazilRepository';
import City from '@/shared/domain/entities/City';

interface Props extends UseControllerProps<any> {
  placeholder?: string;
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  size?: 'medium' | 'small';
  uf?: string;
  label: string;
}

export default function ControlledCity({
  placeholder = 'Digite para buscar...',
  fullWidth = true,
  size = 'small',
  readOnly,
  disabled,
  label,
  uf,
  ...props
}: Props) {
  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController(props);

  const { setValue, watch } = useFormContext();

  const ibgeCode: string | undefined = watch(`${props.name}IbgeCode`);

  const [options, setOptions] = useState<Array<City>>([]);

  const [selected, setSelected] = useState<City | null>(null);

  const repository = new BrazilRepository();

  const { data, isLoading } = useSWR(
    uf ? ['cities', uf] : null,
    ([url, value]) => repository.cities(value)
  );

  function getNoOptionsText() {
    if (!uf) return 'Selecione um estado.';

    return 'Nenhuma cidade encontrada.';
  }

  useEffect(() => {
    if (!uf) setOptions([]);
  }, [uf]);

  useEffect(() => {
    if (data) setOptions(data);
  }, [data]);

  useEffect(() => {
    const normalizedValue = value ? normalizeString(value).toUpperCase() : '';
    const optionSelected = options.find(
      (option) => option.name === normalizeString(normalizedValue).toUpperCase()
    );

    if (optionSelected) {
      setSelected(optionSelected);

      if (optionSelected.ibgeCode !== ibgeCode) {
        setValue(`${props.name}IbgeCode`, optionSelected.ibgeCode);
      }
    } else if (normalizedValue && ibgeCode) {
      const newOption: City = { name: normalizedValue, ibgeCode };
      setOptions((prev) => [...prev, newOption]);
    } else {
      setSelected(null);
      setValue(`${props.name}IbgeCode`, undefined);
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
        value={selected?.name ?? ''}
      />
    );

  return (
    <Autocomplete
      {...field}
      size={size}
      value={selected}
      options={options}
      loading={isLoading}
      disabled={disabled}
      readOnly={readOnly}
      fullWidth={fullWidth}
      noOptionsText={getNoOptionsText()}
      getOptionLabel={(option) => `${option.name} (${option.ibgeCode})`}
      isOptionEqualToValue={(option, selected) => option.name === selected.name}
      onChange={(_, data) => {
        onChange(data?.name ?? '');
        setValue(`${props.name}IbgeCode`, data?.ibgeCode ?? undefined);
        setSelected(data);
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

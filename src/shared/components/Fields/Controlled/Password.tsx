import { MouseEvent, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { Box, IconButton, TextField, Tooltip } from '@mui/material';
import {
  HelpOutline,
  LockOpenOutlined,
  LockOutlined,
} from '@mui/icons-material';

interface Props extends UseControllerProps<any> {
  fullWidth?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  size?: 'medium' | 'small';
  label?: string;
  helper?: boolean;
}

export default function ControlledPassword({
  fullWidth = true,
  label = 'Senha',
  size = 'small',
  helper = true,
  readOnly,
  disabled,
  ...props
}: Props) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  const [show, setShow] = useState(false);

  function handleClickShowPassword() {
    setShow((prev) => !prev);
  }

  function handleMouseDownPassword(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  return (
    <Box display="flex" gap={1} alignItems="start">
      <TextField
        {...field}
        size={size}
        label={label}
        error={!!error}
        disabled={disabled}
        fullWidth={fullWidth}
        placeholder="********"
        helperText={error?.message}
        type={show ? 'text' : 'password'}
        InputProps={{
          readOnly: readOnly,
          endAdornment: (
            <Tooltip
              arrow
              placement="left"
              title={show ? 'Esconder' : 'Visualizar'}
            >
              <IconButton
                size="small"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {show ? (
                  <LockOpenOutlined sx={{ color: 'text.primary' }} />
                ) : (
                  <LockOutlined sx={{ color: 'text.primary' }} />
                )}
              </IconButton>
            </Tooltip>
          ),
        }}
      />

      {helper && (
        <Box
          display="flex"
          alignItems="center"
          height={size === 'small' ? '40px' : '56px'}
        >
          <Tooltip
            arrow
            placement="bottom-end"
            title="A senha deverá conter no mínimo 8 caracteres, dois números e um caractere especial"
          >
            <HelpOutline sx={{ color: 'text.primary' }} />
          </Tooltip>
        </Box>
      )}
    </Box>
  );
}

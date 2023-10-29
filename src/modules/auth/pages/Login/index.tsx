import EUnauthenticatedPath from '@/core/Router/enums/EUnauthenticatedPath';
import LoadingButton from '@/shared/components/Buttons/LoadingButton';
import ControlledCheckbox from '@/shared/components/Fields/Controlled/Checkbox';
import ControlledPassword from '@/shared/components/Fields/Controlled/Password';
import ControlledText from '@/shared/components/Fields/Controlled/Text';
import useLocalStorage from '@/shared/hooks/useLocalStorage';
import { formatErrorForNotification } from '@/shared/utils/Error';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link as LinkRouter } from 'react-router-dom';
import UnauthenticatedAlert, {
  IUnauthenticatedAlert,
} from '../../components/Alert';
import SignPagesHeader from '../../components/SignPagesHeader';
import { loginData, loginSchema } from '../../domain/schemas/login';
import useAuth from '../../hooks/useAuth';
import { decrypt, encrypt } from '@/shared/utils/Crypt';
import { isMobile } from '@/shared/utils/Mobile';

function Login() {
  const { login, loading } = useAuth();
  const mobile = isMobile();

  const [alert, setAlert] = useState<IUnauthenticatedAlert>({
    message: '',
    type: 'error',
  });

  const { storedValue, storeValue, clearStorage } = useLocalStorage<loginData>(
    'login',
    {
      email: '',
      password: '',
      remember: false,
    }
  );

  const { control, handleSubmit } = useForm<loginData>({
    defaultValues: {
      email: storedValue.email || undefined,
      password: decrypt(storedValue.password) || undefined,
      remember: storedValue.remember,
    },
    resolver: zodResolver(loginSchema),
  });

  async function submit(data: loginData) {
    if (loading) return;

    try {
      const { email, password, remember } = data;

      if (remember) {
        storeValue({ email, password: encrypt(password), remember });
      } else {
        clearStorage();
      }

      await login(data);
    } catch (error) {
      setAlert({
        message: formatErrorForNotification(error),
        type: 'error',
      });
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100vw"
      height="100vh"
      bgcolor="primary.dark"
    >
      <SignPagesHeader />

      <Stack
        gap={2}
        height="100%"
        width="100%"
        component="form"
        onSubmit={handleSubmit(submit)}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack gap={2} width={mobile ? '70%' : '25%'}>
          <UnauthenticatedAlert
            alert={alert}
            clear={() => setAlert({ message: '', type: 'error' })}
          />

          <Typography
            display="flex"
            justifyContent="center"
            fontWeight="bold"
            color="white.main"
            fontSize={22}
          >
            Login
          </Typography>

          <ControlledText
            label="E-mail"
            name="email"
            size="small"
            control={control}
            placeholder="usuario@email.com"
            color="white.main"
            borderColor="secondary.light"
            hoverColor="primary.main"
          />

          <ControlledPassword
            label="Senha"
            size="small"
            name="password"
            helper={false}
            control={control}
            color="white.main"
            borderColor="secondary.light"
            hoverColor="primary.main"
          />

          <ControlledCheckbox
            label="Lembrar-me"
            name="remember"
            control={control}
            color="white.main"
          />

          <LoadingButton
            loading={loading}
            loadingText="Carregando..."
            variant="contained"
            type="submit"
            size="large"
            sx={{
              color: 'black',
              bgcolor: 'white.main',
              '&:hover': {
                bgcolor: 'black',
                color: 'white.main',
              },
            }}
          >
            Acessar
          </LoadingButton>

          <Stack alignItems={'center'} gap={2}>
            <Link
              sx={{ textDecorationColor: 'transparent' }}
              color="white.main"
              component={LinkRouter}
              to={`/${EUnauthenticatedPath.RECOVER}`}
            >
              Esqueceu sua senha?
            </Link>

            <Link
              sx={{ textDecorationColor: 'transparent' }}
              color="white.main"
              component={LinkRouter}
              to={`/${EUnauthenticatedPath.REGISTER}`}
            >
              Novo aqui? Crie sua conta!
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Login;

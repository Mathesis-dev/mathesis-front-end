import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link as LinkRouter } from 'react-router-dom';

import EUnauthenticatedPath from '@/core/Router/enums/EUnauthenticatedPath';

import LoadingButton from '@/shared/components/Buttons/LoadingButton';
import ControlledPassword from '@/shared/components/Fields/Controlled/Password';
import ControlledText from '@/shared/components/Fields/Controlled/Text';
import UnauthenticatedAlert, {
  IUnauthenticatedAlert,
} from '../../components/Alert';
import SignPagesHeader from '../../components/SignPagesHeader';

import { formatErrorForNotification } from '@/shared/utils/Error';
import { isMobile } from '@/shared/utils/Mobile';

import SignUpDTO from '../../domain/dtos/SignUpDTO';
import { signUpData, signUpSchema } from '../../domain/schemas/signUp';

import ControlledEnum from '@/shared/components/Fields/Controlled/Enum';
import EUserCategory, {
  EUserCategoryTranslate,
} from '@/shared/domain/enums/EUserCategory';
import EUserGender, {
  EUserGenderTranslate,
} from '@/shared/domain/enums/EUserGender';
import useAuth from '../../hooks/useAuth';
import Page from '@/core/Layout/components/Page';
import ControlledPhone from '@/shared/components/Fields/Controlled/Phone';
import { MailOutline } from '@mui/icons-material';
import ControlledUF from '@/shared/components/Fields/Controlled/UF';
import ControlledCity from '@/shared/components/Fields/Controlled/City';

function Register() {
  const { signUp, loading } = useAuth();

  const mobile = isMobile();

  const [alert, setAlert] = useState<IUnauthenticatedAlert>({
    message: '',
    type: 'warning',
  });

  const methods = useForm<signUpData>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      category: undefined,
      gender: undefined,
      biography: undefined,
      city: undefined,
      phone: undefined,
      state: undefined,
    },
    resolver: zodResolver(signUpSchema),
  });

  const { control, watch } = methods;

  const category: EUserCategory | undefined = watch('category');
  const state: string | undefined = watch('state');

  async function submit(data: signUpData) {
    if (loading) return;

    try {
      const signUpData: SignUpDTO = {
        name: data.name,
        email: data.email,
        password: data.password,
        category: data.category,
        gender: data.gender,
        biography: data.biography,
        city: data.city,
        phone: data.phone,
        state: data.state,
      };

      const message = await signUp(signUpData);

      setAlert({
        type: 'success',
        message,
      });
    } catch (error) {
      setAlert({
        type: 'error',
        message: formatErrorForNotification(error),
      });
    }
  }

  return (
    <FormProvider {...methods}>
      <Page>
        <SignPagesHeader />

        <UnauthenticatedAlert
          alert={alert}
          clear={() => setAlert({ message: '', type: 'error' })}
        />

        <Stack
          sx={{
            alignItems: 'center',
            width: '100%',
            height: '100%',
            flexGrow: 1,
            gap: 2,
            bgcolor: 'primary.dark',
          }}
        >
          <Grid container spacing={2} width={mobile ? '70%' : '25%'}>
            <Grid item xs={12}>
              <Typography
                display="flex"
                justifyContent="center"
                fontWeight="bold"
                color="white.main"
                fontSize={22}
              >
                Criar conta
              </Typography>
            </Grid>

            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
              <ControlledEnum
                control={control}
                name="gender"
                label="Gênero"
                options={EUserGender}
                translate={EUserGenderTranslate}
                color="white.main"
                borderColor="secondary.light"
                hoverColor="primary.main"
              />
            </Grid>

            <Grid item xs={12}>
              <ControlledEnum
                control={control}
                name="category"
                label="Você é professor ou estudante?"
                options={EUserCategory}
                translate={EUserCategoryTranslate}
                color="white.main"
                borderColor="secondary.light"
                hoverColor="primary.main"
              />
            </Grid>

            {category === EUserCategory.TEACHER && (
              <Fragment>
                <Grid item xs={12}>
                  <ControlledPhone
                    label="Telefone"
                    name="phone"
                    control={control}
                    size={'small'}
                    color="white.main"
                    borderColor="secondary.light"
                    hoverColor="primary.main"
                  />
                </Grid>

                <Grid item xs={12}>
                  <ControlledText
                    label="Biografia"
                    name="biography"
                    size="small"
                    control={control}
                    placeholder="Fale um pouco sobre você."
                    color="white.main"
                    borderColor="secondary.light"
                    hoverColor="primary.main"
                    multiline
                  />
                </Grid>

                <Grid item xs={12}>
                  <ControlledUF
                    label="Estado"
                    name="state"
                    control={control}
                    size={'small'}
                    color="white.main"
                    borderColor="secondary.light"
                    hoverColor="primary.main"
                  />
                </Grid>

                <Grid item xs={12}>
                  <ControlledCity
                    label="Cidade"
                    name="city"
                    control={control}
                    uf={state}
                    size={'small'}
                    color="white.main"
                    borderColor="secondary.light"
                    hoverColor="primary.main"
                  />
                </Grid>
              </Fragment>
            )}
          </Grid>

          <Grid container width={mobile ? '70%' : '24%'}>
            <LoadingButton
              loading={loading}
              loadingText="Acessando..."
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
          </Grid>

          <Stack alignItems={'center'}>
            <Link
              sx={{ textDecorationColor: 'transparent' }}
              color="white.main"
              component={LinkRouter}
              to={`/${EUnauthenticatedPath.LOGIN}`}
            >
              Já possui uma conta? Faça o login!
            </Link>
          </Stack>
        </Stack>
      </Page>
    </FormProvider>
  );
}

export default Register;

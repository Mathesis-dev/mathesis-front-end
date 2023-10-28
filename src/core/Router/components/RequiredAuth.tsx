import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { CircularProgress, Stack } from '@mui/material';

import useAuth from '@/modules/auth/hooks/useAuth';
import EUnauthenticatedPath from '../enums/EUnauthenticatedPath';

export default function RequiredAuth() {
  const { authenticated, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <CircularProgress size="50px" />
      </Stack>
    );

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to={'/' + EUnauthenticatedPath.LOGIN}
      state={{ from: location }}
      replace
    />
  );
}

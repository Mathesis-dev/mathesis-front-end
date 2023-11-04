import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '@/modules/auth/hooks/useAuth';

import { Stack } from '@mui/material';

export default function Unauthenticated() {
  const { authenticated } = useAuth();

  if (authenticated) return <Navigate to="/chat" replace />;

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      minHeight="100vh"
      width="100%"
      spacing="0"
      position="relative"
    >
      <Outlet />
    </Stack>
  );
}

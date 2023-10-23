import { Stack } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';

import WhatsAppButton from '@/shared/components/Buttons/WhatsAppButton';

import useAuth from '@/modules/auth/hooks/useAuth';

import UnauthenticatedBackground from '../components/Unauthenticated/Background';
import UnauthenticatedContainer from '../components/Unauthenticated/Container';
import UnauthenticatedHeader from '../components/Unauthenticated/Header';
import UnauthenticatedFooter from '../components/Unauthenticated/Footer';

export default function Unauthenticated() {
  const { authenticated } = useAuth();

  if (authenticated) return <Navigate to="/" replace />;

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      minHeight="100vh"
      width="100%"
      spacing="0"
      position="relative"
    >
      <UnauthenticatedBackground />

      <UnauthenticatedHeader />

      <UnauthenticatedContainer>
        <Outlet />
      </UnauthenticatedContainer>

      <UnauthenticatedFooter />

      <WhatsAppButton />
    </Stack>
  );
}

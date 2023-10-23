import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import EUnauthenticatedPath from '@/core/Router/enums/EUnauthenticatedPath';

export default function UnauthenticatedHeaderButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isLogin = pathname.replace('/', '') === EUnauthenticatedPath.LOGIN;

  function handleNavigate() {
    navigate(
      isLogin ? EUnauthenticatedPath.REGISTER : EUnauthenticatedPath.LOGIN
    );
  }

  return (
    <Button
      sx={{ minWidth: '192px' }}
      onClick={handleNavigate}
      variant="contained"
      color="white"
      size="large"
      disableElevation
    >
      {isLogin ? 'Seja nosso Parceiro' : 'Acessar'}
    </Button>
  );
}

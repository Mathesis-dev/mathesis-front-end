import { ReactNode } from 'react';
import { Box, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';
import EUnauthenticatedPath from '@/core/Router/enums/EUnauthenticatedPath';

interface Props {
  children: ReactNode;
}

export default function UnauthenticatedContainer({ children }: Props) {
  const { pathname } = useLocation();

  const isSignUp = pathname.replace('/', '') === EUnauthenticatedPath.REGISTER;

  const maxWidth = isSignUp ? '600px' : '400px';

  return (
    <Paper
      component="main"
      elevation={2}
      sx={{
        width: 'calc(100% - 32px)',
        maxWidth: maxWidth,
        borderRadius: 2,
      }}
    >
      <Box
        justifyContent="center"
        flexDirection="column"
        maxWidth={maxWidth}
        display="flex"
        padding="24px"
        width="100%"
        gap={3}
      >
        {children}
      </Box>
    </Paper>
  );
}

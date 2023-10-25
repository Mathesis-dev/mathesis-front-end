import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignPagesHeader() {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate('/');
  };

  return (
    <Box
      className="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bgcolor: 'primary.dark',
        width: '100%',
        height: { xs: '5rem', sm: '6.875rem' },
        paddingX: { xs: '10%', md: '10%' },
      }}
    >
      <Button
        sx={{
          color: 'black',
          backgroundColor: 'white.main',
          borderRadius: '20px',
          px: {
            xs: '1.5625rem',
            sm: '1.675rem',
          },
          py: {
            xs: '0.45rem',
            sm: '0.8rem',
          },
          '&:hover': {
            color: 'white.main',
            bgcolor: 'black',
          },
        }}
        onClick={navigateToLandingPage}
      >
        Voltar
      </Button>
      <Typography
        sx={{
          color: 'white.main',
          fontWeight: 'bold',
          fontSize: { xs: '1.25rem', sm: '1.4375rem', lg: '1.625rem' },
        }}
      >
        Mathesis
      </Typography>
    </Box>
  );
}

import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate('/login');
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="primary.main"
      width="100%"
      height={{
        xs: '5rem',
        sm: '6.875rem',
      }}
      px={{
        xs: '10%',
        md: '10%',
      }}
      zIndex="1"
    >
      <Typography
        sx={{
          color: 'white.main',
          fontWeight: 'bold',
          fontSize: {
            xs: '1.25rem',
            sm: '1.4375rem',
            lg: '1.625rem',
          },
        }}
      >
        Mathesis
      </Typography>
      <Box>
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
              backgroundColor: 'black',
            },
          }}
          onClick={navigateToLoginPage}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

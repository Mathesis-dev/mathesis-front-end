import { Button, Box, Typography } from '@mui/material';
import TeamIcon from '../../../../shared/assets/icons/team.svg';

export default function WannaHelp() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      bgcolor="white.main"
      height={{
        xs: '39.0625rem',
        sm: '38rem',
        '2xl': '50rem',
      }}
      paddingY={'420px'}
    >
      <Box
        display="flex"
        flexDirection={{ md: 'column', xl: 'row' }}
        justifyContent="space-around"
        alignItems="center"
        width="65%"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            fontWeight="bold"
            fontSize={{
              xs: '2.5rem',
              '2xl': '3rem',
            }}
            textAlign="center"
            pt={{ xs: '0px', sm: '5rem' }}
            pb={{ xs: '2.8125rem', sm: '2.5rem' }}
          >
            Queremos te ajudar!
          </Typography>

          <Typography
            width={{ xs: '21.875rem', sm: '100%', md: '35rem' }}
            textAlign="center"
            fontSize={{
              xs: '1.45rem',
              '2xl': '1.375rem',
            }}
          >
            Nossa missão é te ajudar da melhor forma possível. Navegue pela
            plataforma e encontre os melhores profissionais.
          </Typography>

          <Button
            sx={{
              backgroundColor: 'primary.main',
              mt: { xs: '3.75rem', sm: '3.125rem' },
              borderRadius: '20px',
              px: '3.75rem',
              py: '1rem',
              color: 'white.main',
              '&:hover': {
                backgroundColor: 'primary.main',
              },
            }}
          >
            Sobre nós
          </Button>
        </Box>

        <Box
          component="img"
          src={TeamIcon}
          alt="Equipe"
          display={{ xs: 'none', sm: 'block' }}
          mt="0px"
          width={{ xs: '0px', md: '60%', xl: '60%' }}
          height={{ xs: '0px', md: '31.25rem', xl: '60%' }}
        />
      </Box>
    </Box>
  );
}

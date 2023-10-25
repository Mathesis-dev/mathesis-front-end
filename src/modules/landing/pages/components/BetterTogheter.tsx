import { Box, Button, Typography } from '@mui/material';
import TeacherIcon from '../../../../shared/assets/icons/teacher.svg';

export default function BetterTogether() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      bgcolor="primary.main"
      height={{
        xs: '43rem',
        sm: '55rem',
        xl: '42rem',
        xxl: '88vh',
      }}
      sx={{ padding: '6rem' }}
    >
      <Box
        display="flex"
        flexDirection={{ md: 'column', xl: 'row' }}
        alignItems="center"
        justifyContent="space-around"
        width="60%"
      >
        <Box
          component="img"
          height={{
            xs: '0px',
            md: '60%',
            xl: '80%',
            xxl: '100%',
          }}
          width={{
            xs: '0px',
            md: '31.25rem',
            xl: '80%',
            xxl: '100%',
          }}
          mt={7.5}
          src={TeacherIcon}
          alt="Professor com alunos"
          display={{ xs: 'none', sm: 'block' }}
        />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            color="white.main"
            fontWeight="bold"
            fontSize={{
              xs: '2.4rem',
              xxl: '3rem',
            }}
            textAlign="center"
            py={{ xs: '2.5rem', sm: '3rem' }}
          >
            Somos melhores juntos!
          </Typography>

          <Typography
            color="white.main"
            width={{ xs: '21.875rem', sm: '100%', md: '35rem' }}
            textAlign="center"
            fontSize={{
              xs: '1.35rem',
              xxl: '1.375rem',
            }}
          >
            Mathesis te ajuda a encontrar professores para marcar aulas
            particulares, de maneira eficiente, fácil e rápida. Diga adeus a
            suas dúvidas e busque agora por um profissional para te ajudar!
          </Typography>

          <Button
            sx={{
              backgroundColor: 'white.main',
              color: 'black',
              width: '12.5rem',
              mt: {
                xs: '3.125rem',
                sm: '1.875rem',
              },
              borderRadius: '20px',
              px: '1.875rem',
              py: '1rem',
              '&:hover': {
                color: 'white.main',
                backgroundColor: 'black',
              },
            }}
          >
            Criar conta
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

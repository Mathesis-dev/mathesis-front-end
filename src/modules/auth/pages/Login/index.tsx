import React, { useState } from 'react';
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SignPagesHeader from '../../components/SignPagesHeader';
import ErrorMessage from '../../components/ErrorMessage';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box display="flex" flexDirection="column" width="100vw" height="100vh" bgcolor="primary.200">
      <SignPagesHeader />

      <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" flexDirection="column">
        <Box width={['80%', '70%', '50%', '40%', '25%']} display="flex" flexDirection="column" color="white" fontWeight="bold">
          <form onSubmit={login}>
            <FormControl fullWidth variant="outlined" required>
              <Typography fontSize={{ xs: '1.25rem' }} marginBottom={{ xs: '1.25rem' }} textAlign="center">
                Login
              </Typography>
              <Box display="flex" flexDirection="column" minHeight={error ? '20rem' : '15rem'} justifyContent="space-between">
                <Box display="flex" flexDirection="column">
                  {error && <ErrorMessage message={error} />}
                  
                  <InputLabel htmlFor="email-input">E-mail</InputLabel>
                  <OutlinedInput
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Box>

                <Box display="flex" flexDirection="column">
                  <InputLabel htmlFor="password-input">Senha</InputLabel>
                  <OutlinedInput
                    id="password-input"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handlePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <Button
                    disabled={isLoading}
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mt: '1.5625rem', py: '1.25rem', borderRadius: '15px' }}
                  >
                    {isLoading ? <CircularProgress size="1.5rem" /> : 'Login'}
                  </Button>
                </Box>
              </Box>
            </FormControl>
          </form>
        </Box>

        <Typography color="white" sx={{ mt: '1.625rem', cursor: 'pointer' }}>
          Esqueceu sua senha?
        </Typography>
        <Typography color="white" sx={{ mt: '0.625rem', cursor: 'pointer' }}>
          Novo aqui? Crie sua conta!
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;

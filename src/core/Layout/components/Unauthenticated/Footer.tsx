import { Container, Link, Stack, Typography } from '@mui/material';

export default function UnauthenticatedFooter() {
  return (
    <Container component="footer">
      <Stack justifyContent="center" alignItems="center" paddingY={3}>
        <Typography variant="body2" textAlign="center" color="text.secondary">
          © 2023 Mathesis
        </Typography>
      </Stack>
    </Container>
  );
}

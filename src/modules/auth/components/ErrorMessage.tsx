import { Alert, AlertTitle } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box } from '@mui/material';

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <Box my={4}>
      <Alert severity="error" variant="filled" style={{ borderRadius: 4 }}>
        <ErrorOutlineIcon fontSize="inherit" />
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    </Box>
  );
}

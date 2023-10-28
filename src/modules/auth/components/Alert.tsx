import { Clear } from '@mui/icons-material';
import { Alert, Box, Collapse, IconButton } from '@mui/material';

export interface IUnauthenticatedAlert {
  message: string;
  type: 'success' | 'error' | 'warning';
}

interface Props {
  alert: IUnauthenticatedAlert;
  clear: () => void;
}

export default function UnauthenticatedAlert({ alert, clear }: Props) {
  return (
    <Collapse in={!!alert.message}>
      <Alert
        severity={alert.type}
        action={
          <IconButton color={alert.type} size="small" onClick={clear}>
            <Clear fontSize="inherit" />
          </IconButton>
        }
      >
        {alert.message.split('\n').map((msg, idx) => (
          <Box key={idx} display="block">
            {msg}
          </Box>
        ))}
      </Alert>
    </Collapse>
  );
}

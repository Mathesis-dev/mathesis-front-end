import { Alert as MuiAlert, AlertColor } from '@mui/material';

interface Props {
  severity: AlertColor;
  message: string;
}

export default function Alert({ severity, message }: Props) {
  return (
    <MuiAlert variant="outlined" severity={severity}>
      {message}
    </MuiAlert>
  );
}

import { Button, ButtonProps, CircularProgress } from '@mui/material';

interface Props extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
}

export default function LoadingButton({
  children,
  loading,
  loadingText,
  fullWidth = true,
  ...props
}: Props) {
  const textLoading = loadingText ?? children;

  return (
    <Button
      fullWidth={fullWidth}
      disableElevation
      sx={{ display: 'flex' }}
      {...props}
    >
      {loading && (
        <CircularProgress color="inherit" size={18} sx={{ marginRight: 1 }} />
      )}
      {loading ? textLoading : children}
    </Button>
  );
}

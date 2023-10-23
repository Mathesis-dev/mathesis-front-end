import { ReactNode } from 'react';
import { Button, Link } from '@mui/material';

interface Props {
  icon: ReactNode;
  url: string;
}

export default function UnauthenticatedHeaderLink({ icon, url }: Props) {
  return (
    <Button
      LinkComponent={Link}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      variant="contained"
      color="white"
      disableElevation
      sx={{
        minWidth: 0,
        padding: 1,
      }}
    >
      {icon}
    </Button>
  );
}

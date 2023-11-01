import { ReactNode } from 'react';
import { Stack } from '@mui/material';

interface Props {
  children: ReactNode;
}

export default function PageHeader({ children }: Props) {
  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      gap={3}
    >
      {children}
    </Stack>
  );
}

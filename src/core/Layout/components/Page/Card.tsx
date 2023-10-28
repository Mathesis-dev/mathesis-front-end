import { ReactNode } from 'react';
import { Paper, SxProps, Theme } from '@mui/material';
import theme from '@/core/Theme';

interface Props {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export default function PageCard({ children, sx }: Props) {
  return (
    <Paper
      sx={{
        boxShadow: theme.boxShadowDefault,
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        display: 'flex',
        borderRadius: 2,
        padding: 3,
        gap: 3,
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}

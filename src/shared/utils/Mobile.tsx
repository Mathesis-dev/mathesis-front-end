import { useMediaQuery } from '@mui/material';

export function isMobile(xs?: boolean): boolean {
  return useMediaQuery((theme: any) =>
    theme.breakpoints.down(xs ? 'xs' : 'sm')
  );
}

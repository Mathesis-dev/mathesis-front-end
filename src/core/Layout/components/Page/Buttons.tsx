import { ReactNode } from 'react';
import { Stack, useMediaQuery } from '@mui/material';

interface Props {
  children: ReactNode;
}

export default function PageButtons({ children }: Props) {
  const lessThanTablet: boolean = useMediaQuery((theme: any) =>
    theme.breakpoints.down('md')
  );

  const lessThanMobile: boolean = useMediaQuery((theme: any) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Stack
      flexWrap={lessThanTablet ? 'wrap' : 'nowrap'}
      justifyContent="end"
      direction="row"
      flexGrow={1}
      gap={3 / 2}
      sx={{
        '& .MuiButton-root': {
          minWidth: !lessThanTablet ? '180px' : undefined,
          flexGrow: !lessThanMobile ? 0 : 1,
        },
      }}
    >
      {children}
    </Stack>
  );
}

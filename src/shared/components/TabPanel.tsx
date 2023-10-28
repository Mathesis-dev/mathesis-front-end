import { Box, SxProps, Theme } from '@mui/material';
import { PropsWithChildren } from 'react';

interface TabPanelProps extends PropsWithChildren {
  index: number;
  value: number;
  sx?: SxProps<Theme>;
}

export default function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...otherProps } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...otherProps}
    >
      {children}
    </Box>
  );
}

import { Fragment, PropsWithChildren, useState } from 'react';
import { Box, Collapse, Divider, IconButton, Typography } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Variant } from '@mui/material/styles/createTypography';

interface Props extends PropsWithChildren {
  title: string;
  opened?: boolean;
  variant?: Variant;
  size?: 'small' | 'medium' | 'large';
}

export default function ColapseContent({
  title,
  children,
  variant = 'h6',
  opened = false,
  size = 'medium',
}: Props) {
  const [open, setOpen] = useState<boolean>(opened);

  function toggleColapse() {
    setOpen((prev) => !prev);
  }

  return (
    <Fragment>
      <Box display="flex" flexDirection="column">
        <Box
          gap={1}
          display="flex"
          flexDirection="row"
          alignItems="center"
          onClick={toggleColapse}
          sx={{ cursor: 'pointer' }}
          title={open ? 'Minimizar' : 'Expandir'}
        >
          <IconButton size={size}>
            <KeyboardArrowUp
              fontSize={size}
              sx={{ rotate: open ? '0' : '180deg', transition: '0.3s ease' }}
            />
          </IconButton>

          <Typography
            variant={variant}
            fontWeight="bold"
            color="text.secondary"
          >
            {title}
          </Typography>
        </Box>

        <Divider flexItem />
      </Box>

      <Collapse in={open} sx={{ marginTop: 1 }}>
        {children}
      </Collapse>
    </Fragment>
  );
}

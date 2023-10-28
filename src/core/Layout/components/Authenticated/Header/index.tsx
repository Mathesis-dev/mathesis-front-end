import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { useSidebar } from '@/core/Layout/hooks/useSidebar';
import { isMobile } from '@/shared/utils/Mobile';

import AuthenticatedHeaderBreadcrumbs from './Breadcrumbs';
import AuthenticatedHeaderProfile from './Profile';

export default function AuthenticatedHeader() {
  const { open } = useSidebar();
  const mobile = isMobile();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Toolbar
        component={Box}
        justifyContent={mobile ? 'start' : 'space-between'}
        padding={mobile ? 2 : undefined}
        alignItems="center"
        display="flex"
        flexGrow={1}
        gap={2}
      >
        {mobile && (
          <Button
            variant="contained"
            disableElevation
            onClick={open}
            sx={{
              minWidth: '0px',
              height: '40px',
              width: '40px',
            }}
          >
            <Menu />
          </Button>
        )}
        <AuthenticatedHeaderBreadcrumbs />
        {!mobile && (
          <Stack
            flexDirection="row"
            justifyContent="flex-end"
            gap={2}
            minWidth="240px"
          >
            <AuthenticatedHeaderProfile />
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

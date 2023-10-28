import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import ConfirmDialogProvider from '@/shared/providers/ConfirmDialogProvider';

import { isMobile } from '@/shared/utils/Mobile';
import { SidebarProvider } from '../hooks/useSidebar';

import AuthenticatedHeader from '../components/Authenticated/Header';
import AuthenticatedSidebar from '../components/Authenticated/Sidebar';

export default function Authenticated() {
  const mobile = isMobile();

  return (
    <Box
      paddingLeft={mobile ? 0 : '64px'}
      flexDirection="column"
      minHeight="100vh"
      display="flex"
      width="100%"
      flexGrow={1}
    >
        <ConfirmDialogProvider>
            <SidebarProvider>
              <AuthenticatedHeader />

              <AuthenticatedSidebar />

              <Box
                paddingBottom={mobile ? 12 : 3}
                flexDirection="column"
                display="flex"
                flexGrow={1}
                padding={3}
                gap={3}
                component="main"
              >
                <Outlet />
              </Box>
            </SidebarProvider>
        </ConfirmDialogProvider>

      <ToastContainer position="top-center" />
    </Box>
  );
}

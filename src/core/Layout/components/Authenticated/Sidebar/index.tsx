import { Logout } from '@mui/icons-material';
import {
  Box,
  ClickAwayListener,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import { toast } from 'react-toastify';

import { useSidebar } from '@/core/Layout/hooks/useSidebar';
import toSidebar from '@/core/Router/mappers/toSidebar';
import routes from '@/core/Router/routes';
import theme from '@/core/Theme';

import { isMobile } from '@/shared/utils/Mobile';
import Logo from '@/shared/components/Logo';

import useConfirmDialog from '@/shared/hooks/useConfirmDialog';
import useAuth from '@/modules/auth/hooks/useAuth';

import { SidebarButton, SidebarPaper } from './styles';
import SidebarItem from './Item';

export default function AuthenticatedSidebar() {
  const { logout } = useAuth();
  const { openConfirmDialog } = useConfirmDialog();
  const { isOpen, open, close, toggle } = useSidebar();

  const mobile = isMobile();
  const items = toSidebar(routes);

  async function handleConfirmLogout() {
    try {
      const confirm = await openConfirmDialog(
        'Atenção!',
        'Você tem certeza que deseja sair do portal?\n\n Para acessar novamente será necessário informar seu e-mail e senha.'
      );

      if (confirm) logout();
    } catch (error: any) {
      toast.warn(error as string);
    }
  }

  return (
    <ClickAwayListener onClickAway={!mobile ? close : () => {}}>
      <Drawer
        variant={mobile ? 'temporary' : 'permanent'}
        onMouseEnter={!mobile ? open : undefined}
        onMouseLeave={!mobile ? close : undefined}
        onClose={mobile ? close : undefined}
        open={isOpen}
        anchor="left"
        PaperProps={{
          sx: SidebarPaper(isOpen, mobile),
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          flexWrap="nowrap"
          direction="row"
          padding={1}
          gap={1}
        >
          <Box
            justifyContent="center"
            alignItems="center"
            display="flex"
            minWidth={48}
            height={48}
            padding={0}
            margin={0}
          >
            <Logo color={theme.palette.primary.main} width="100%" />
          </Box>
        </Stack>

        <Divider flexItem sx={{ marginX: 1 }} />

        <Box
          sx={{
            overflowY: isOpen ? 'auto' : 'hidden',
            overflowX: 'hidden',
            flexGrow: 1,
          }}
        >
          <List>
            {items.map((item, index) => (
              <SidebarItem
                key={`sidebar-item-${index}`}
                toggleSidebar={toggle}
                openedSidebar={isOpen}
                item={item}
              />
            ))}
          </List>
        </Box>

        <Divider flexItem sx={{ marginX: 1 }} />

        <List>
          <ListItemButton
            sx={SidebarButton}
            onClick={handleConfirmLogout}
            disableGutters
            disableRipple
          >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>

            <ListItemText primary="Sair" />
          </ListItemButton>
        </List>
      </Drawer>
    </ClickAwayListener>
  );
}

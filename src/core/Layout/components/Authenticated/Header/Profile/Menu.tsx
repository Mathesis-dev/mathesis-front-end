import { useNavigate } from 'react-router-dom';
import { Logout, ManageAccounts } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { toast } from 'react-toastify';

import useAuth from '@/modules/auth/hooks/useAuth';
import useConfirmDialog from '@/shared/hooks/useConfirmDialog';

export default function AuthenticatedHeaderProfileMenu() {
  const { logout } = useAuth();
  const { openConfirmDialog } = useConfirmDialog();

  const navigate = useNavigate();

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
    <List dense disablePadding>
      <ListItem
        disablePadding
        onClick={() => navigate(`/configuracoes-do-usuario`)}
      >
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: '24px', marginRight: 1 }}>
            <ManageAccounts sx={{ color: 'text.primary' }} />
          </ListItemIcon>
          <ListItemText primary="Configurações do Usuário" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding onClick={handleConfirmLogout}>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: '24px', marginRight: 1 }}>
            <Logout sx={{ color: 'text.primary' }} />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

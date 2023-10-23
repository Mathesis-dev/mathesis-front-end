import { Person } from '@mui/icons-material';
import { Avatar, Stack, Typography } from '@mui/material';

import useAuth from '@/modules/auth/hooks/useAuth';

export default function AuthenticatedHeaderProfileInfo() {
  const { user } = useAuth();

  const avatar = undefined;

  return (
    <Stack direction="row" gap={2} alignItems="center">
      <Avatar
        alt={user?.name ?? undefined}
        src={avatar}
        sx={{
          height: 64,
          width: 64,
        }}
      >
        <Person fontSize="large" sx={{ color: 'text.primary' }} />
      </Avatar>

      <Stack width="calc(100% - 80px)">
        <Typography fontSize={16}>{user?.name ?? undefined}</Typography>
        <Typography fontSize={12} textOverflow="ellipsis" overflow="hidden">
          {user?.email}
        </Typography>
      </Stack>
    </Stack>
  );
}

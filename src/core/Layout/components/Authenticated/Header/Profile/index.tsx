import { Fragment, MouseEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import {
  Avatar,
  ClickAwayListener,
  Divider,
  Fade,
  Paper,
  Popper,
  Stack,
} from '@mui/material';

import theme from '@/core/Theme';

import useAuth from '@/modules/auth/hooks/useAuth';

import AuthenticatedHeaderProfileInfo from './Info';
import AuthenticatedHeaderProfileMenu from './Menu';

export default function AuthenticatedHeaderProfile() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  function handleToggle(event: MouseEvent<HTMLElement>) {
    setOpen((previousValue) => !previousValue);
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setOpen(false);
    setAnchorEl(null);
  }

  const avatar = undefined;

  useEffect(() => {
    if (pathname) handleClose();
  }, [pathname]);

  return (
    <Fragment>
      <Avatar
        alt="Profile Picture"
        src={avatar}
        onClick={handleToggle}
        sx={{
          boxShadow: theme.boxShadowDefault,
          backgroundColor: 'background.paper',
          transition: '0.3s ease',
          cursor: 'pointer',
          height: 40,
          width: 40,
          '&:hover': {
            filter: 'brightness(0.85)',
          },
        }}
      >
        <Person sx={{ color: 'text.primary' }} />
      </Avatar>

      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorEl}
        transition
        disablePortal
        sx={{ zIndex: 9 }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 1,
                minWidth: 240,
                maxWidth: 300,
                marginTop: 1,

                '&:before': {
                  content: '""',
                  transform: 'translateY(-50%) rotate(45deg)',
                  bgcolor: 'background.paper',
                  position: 'absolute',
                  display: 'block',
                  height: 10,
                  zIndex: 0,
                  width: 10,
                  right: 14,
                  top: 10,
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <Stack gap={2} padding={2}>
                  <AuthenticatedHeaderProfileInfo />

                  <Divider flexItem sx={{ borderColor: 'primary.main' }} />

                  <AuthenticatedHeaderProfileMenu />
                </Stack>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Fragment>
  );
}

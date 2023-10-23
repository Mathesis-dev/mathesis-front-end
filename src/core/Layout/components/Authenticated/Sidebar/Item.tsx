import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { isArray } from '@/shared/utils/Array';

import ISidebarItem from '@/core/Layout/interfaces/ISidebarItem';

import { SidebarButton, SubSidebarButton } from './styles';

interface Props {
  item: ISidebarItem;
  openedSidebar: boolean;
  toggleSidebar: () => void;
}

export default function AuthenticatedSidebarItem({
  item,
  openedSidebar,
  toggleSidebar,
}: Props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  function checkChildren(item: ISidebarItem): boolean {
    return isArray(item.children) && Boolean(item.children?.at(0)?.name);
  }

  function toggleSubList() {
    if (!openedSidebar) toggleSidebar();
    setOpen((prev) => !prev);
  }

  function handleNavigate(path: string) {
    if (openedSidebar) toggleSidebar();
    navigate(path);
  }

  const onClick = checkChildren(item)
    ? toggleSubList
    : () => handleNavigate(item.path ?? '');

  const selected =
    item.children
      ? pathname.includes(item.path ?? '')
      : pathname === item.path;

  useEffect(() => {
    if (!openedSidebar) setOpen(false);
  }, [openedSidebar]);

  return (
    <Fragment>
      <ListItemButton
        disableRipple
        disableGutters
        onClick={onClick}
        selected={selected}
        sx={SidebarButton}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>

        <ListItemText primary={item.name} />

        {checkChildren(item) && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {item.children && item.children.length > 0 && (
        <Collapse in={open} sx={{ padding: 0, margin: 0 }}>
          <List component="div" disablePadding>
            {item.children.map(({ name, path, ability }, index) => {
                return (
                  <ListItemButton
                    disableRipple
                    disableGutters
                    sx={SubSidebarButton}
                    key={`${name}-${index}`}
                    selected={path === pathname}
                    onClick={() => handleNavigate(path ?? '')}
                  >
                    <ListItemText primary={name} />
                  </ListItemButton>
                );
            })}
          </List>
        </Collapse>
      )}
    </Fragment>
  );
}

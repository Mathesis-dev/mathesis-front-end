import theme from '@/core/Theme';

export function SidebarPaper(open: boolean, mobile?: boolean) {
  const style = {
    backgroundColor: 'background.default',
    boxShadow: theme.boxShadowDefault,
    overflow: 'hidden',
    maxWidth: 360,
    width: 320,
    border: 0,
  };

  if (!mobile) {
    Object.assign(style, {
      minWidth: open ? 280 : 64,
      width: open ? 320 : 64,
      transition: '0.3s ease',
    });
  }

  return style;
}

export const SidebarButton = {
  minWidth: '48px',
  borderRadius: 2,
  padding: 1,
  margin: 1,
  gap: 2,

  '&.Mui-selected': {
    boxShadow: theme.boxShadowDefault,
    backgroundColor: 'white.main',
  },

  '&.Mui-selected:hover': {
    backgroundColor: 'white.main',
    filter: 'brightness(0.95)',
  },

  '&.Mui-selected .MuiListItemIcon-root': {
    backgroundColor: 'primary.main',
    color: 'white.main',
  },

  '&.Mui-selected .MuiListItemText-root .MuiTypography-root': {
    fontWeight: 'bold',
  },

  '& .MuiListItemIcon-root': {
    background: 'white.main',
    color: 'text.primary',
    borderRadius: 2,
    padding: 1 / 2,
    minWidth: 0,
  },

  '& .MuiListItemText-root': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
};

export const SubSidebarButton = {
  marginLeft: '56px',
  borderRadius: 2,
  paddingX: 2,
  padding: 1,
  margin: 1,
  gap: 2,

  '&.Mui-selected': {
    boxShadow: theme.boxShadowDefault,
    backgroundColor: 'white.main',
  },

  '&.Mui-selected:hover': {
    backgroundColor: 'white.main',
    filter: 'brightness(0.85)',
  },

  '&.Mui-selected .MuiListItemIcon-root': {
    backgroundColor: 'primary.main',
    color: 'white.main',
  },

  '&.Mui-selected .MuiListItemText-root .MuiTypography-root': {
    fontWeight: 'bold',
  },

  '& .MuiListItemText-root': {
    whiteSpace: 'nowrap',
  },
};

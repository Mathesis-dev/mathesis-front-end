import { createTheme } from '@mui/material/styles';

const boxShadowDefault = '0px 4px 6px rgba(0, 0, 0, 0.05)';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }
  interface PaletteOptions {
    white: PaletteOptions['primary'];
  }
  interface Theme {
    boxShadowDefault: string;
  }
  interface ThemeOptions {
    boxShadowDefault: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      dark: '#1F173F',
      main: '#6E4AFF',
    },
    secondary: {
      main: '#191919',
      light: '#404040',
    },
    success: {
      dark: '#237A2C',
      main: '#2B9535',
      light: '#32AD3F',
    },
    warning: {
      dark: '#C29100',
      main: '#F3B700',
      light: '#FFC929',
    },
    white: {
      dark: '#F5F5F5',
      main: '#FAFAFA',
      light: '#FFFFFF',
      contrastText: '#6E4AFF',
    },
    text: {
      primary: '#191919',
      secondary: '#404040',
      disabled: '#ABABAB',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FAFAFA',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: boxShadowDefault,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          boxShadow: boxShadowDefault,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& input[readonly]': {
            backgroundColor: '#F5F5F5',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          gap: '14px',
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        loadingText: 'Carregando...',
        noOptionsText: 'Nenhuma opção disponível.',
      },
    },
    MUIDataTable: {
      styleOverrides: {
        root: {
          width: '100%',
          boxShadow: 'none',
        },
      },
    },
    MUIDataTableBodyRow: {
      styleOverrides: {
        root: {
          ':hover': {
            cursor: 'pointer',
          },
        },
      },
    },
    MUIDataTablePagination: {
      styleOverrides: {
        tableCellContainer: {
          borderBottom: 0,
        },
      },
    },
  },
  boxShadowDefault: boxShadowDefault,
});

export default theme;

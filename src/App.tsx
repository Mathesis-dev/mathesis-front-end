import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig, SWRConfiguration } from 'swr';
import { toast } from 'react-toastify';

import Router from '@core/Router';
import theme from '@core/Theme';

import { formatErrorForNotification } from './shared/utils/Error';
import { AuthProvider } from './modules/auth/contexts/authContext';

import 'react-toastify/dist/ReactToastify.css';
import '@core/Theme/global.css';

import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

export default function App() {
  const swrConfiguration: SWRConfiguration = {
    refreshInterval: 0,
    errorRetryCount: 0,
    dedupingInterval: 0,
    errorRetryInterval: 0,
    focusThrottleInterval: 0,
    shouldRetryOnError: false,
    onError(err) {
      toast.error(formatErrorForNotification(err));
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <SWRConfig value={swrConfiguration}>
        <BrowserRouter>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </BrowserRouter>
      </SWRConfig>
    </ThemeProvider>
  );
}

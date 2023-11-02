import {
  FavoriteBorder,
  HomeOutlined,
  SmartToyOutlined,
} from '@mui/icons-material';

import EAuthenticatedPath from './enums/EAuthenticatedPath';

import IRoute from './interfaces/IRoute';

import Home from '@/modules/home/pages';
import Favorites from '@/modules/favorites/pages';
import Chat from '@/modules/chat/pages';

const routes: Array<IRoute> = [
  {
    name: 'Home',
    icon: <HomeOutlined />,
    element: <Home />,
    path: EAuthenticatedPath.HOME,
  },
  {
    name: 'Favoritos',
    icon: <FavoriteBorder />,
    element: <Favorites />,
    path: EAuthenticatedPath.FAVORITE,
  },
  {
    name: 'Mathesis IA',
    icon: <SmartToyOutlined />,
    element: <Chat />,
    path: EAuthenticatedPath.CHAT,
  },
];

export default routes;

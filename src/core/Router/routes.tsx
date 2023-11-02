import { FavoriteBorder, HomeOutlined } from '@mui/icons-material';

import EAuthenticatedPath from './enums/EAuthenticatedPath';

import IRoute from './interfaces/IRoute';

import Home from '@/modules/home/pages';
import Favorites from '@/modules/favorites/pages';

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
];

export default routes;

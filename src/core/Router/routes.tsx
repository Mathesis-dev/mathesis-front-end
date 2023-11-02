import Home from '@/modules/home/pages';

import { HomeOutlined } from '@mui/icons-material';

import EAuthenticatedPath from './enums/EAuthenticatedPath';
import IRoute from './interfaces/IRoute';

const routes: Array<IRoute> = [
  {
    name: 'Home',
    icon: <HomeOutlined />,
    element: <Home />,
    path: EAuthenticatedPath.HOME,
  },
];

export default routes;

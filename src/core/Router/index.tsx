import { Navigate, useRoutes } from 'react-router-dom';

import RequiredAuth from './components/RequiredAuth';
import toRouter from './mappers/toRouter';
import routes from './routes';

import EUnauthenticatedPath from './enums/EUnauthenticatedPath';

import Unauthenticated from '../Layout/pages/Unauthenticated';
import Authenticated from '../Layout/pages/Authenticated';

import Login from '@/modules/auth/pages/Login';
import Landing from '@/modules/landing/pages';
import Register from '@/modules/auth/pages/Register';

export default function Router() {
  return useRoutes([
    {
      element: <Unauthenticated />,
      children: [
        {
          path: EUnauthenticatedPath.LANDING,
          element: <Landing />,
        },
        {
          path: EUnauthenticatedPath.LOGIN,
          element: <Login />,
        },
        {
          path: EUnauthenticatedPath.REGISTER,
          element: <Register />,
        },
      ],
    },
    {
      element: <RequiredAuth />,
      children: [
        {
          element: <Authenticated />,
          children: [
            {
              path: '*',
              element: <Navigate to="/" />,
            },
            ...toRouter(routes),
          ],
        },
      ],
    },
  ]);
}

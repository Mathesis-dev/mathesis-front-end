import { RouteObject } from 'react-router-dom';
import IRoute from '../interfaces/IRoute';

function toRouteObject(route: IRoute): RouteObject {
  return {
    index: route.index,
    path: route.path,
    element: route.element,
    children: route.childrens?.map((children) => toRouteObject(children)),
  } as RouteObject;
}

export default function toRouter(routes: Array<IRoute>) {
  return routes.map((route) => toRouteObject(route));
}

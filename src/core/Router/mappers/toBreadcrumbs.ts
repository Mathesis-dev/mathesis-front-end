import IRoute from '../interfaces/IRoute';

function toBreadcrumbPath(
  routes: Array<IRoute>,
  pathPrefix?: string
): Record<string, string> {
  return routes.reduce((prev, route) => {
    const childrens = route.childrens
      ? toBreadcrumbPath(
          route.childrens,
          route.path ? `${pathPrefix}/${route.path ?? ''}` : pathPrefix
        )
      : {};

    const path = [pathPrefix, route.path].join('/');

    return {
      ...prev,
      [path]: route.name ?? '',
      ...childrens,
    };
  }, {} as Record<string, string>);
}

export default function toBreadcrumbs(
  routes: Array<IRoute>
): Record<string, string> {
  return routes.reduce((prev, route) => {
    const childrens = route.childrens
      ? toBreadcrumbPath(route.childrens, `/${route.path ?? ''}`)
      : {};

    return {
      ...prev,
      [`/${route.path}`]: route.name ?? '',
      ...childrens,
    };
  }, {} as Record<string, string>);
}

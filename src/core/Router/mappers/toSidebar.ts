import ISidebarItem from '@/core/Layout/interfaces/ISidebarItem';
import IRoute from '../interfaces/IRoute';

function toSidebarItems(route: IRoute): ISidebarItem {
  if (route.index || route.hidden) return {} as ISidebarItem;

  return {
    name: route.name,
    path: '/' + route.path,
    icon: route.icon,
    children: route.childrens
      ?.map((children) => {
        if (children.index || children.hidden) return {} as ISidebarItem;

        return {
          name: children.name,
          path: `/${route.path}/${children.path}`,
        };
      })
      .filter((r) => !!r.name),
  } as ISidebarItem;
}

export default function toSidebar(routes: Array<IRoute>): Array<ISidebarItem> {
  return routes.map((route) => toSidebarItems(route)).filter((r) => !!r.name);
}

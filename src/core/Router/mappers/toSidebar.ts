import ISidebarItem from '@/core/Layout/interfaces/ISidebarItem';
import IRoute from '../interfaces/IRoute';

function toSidebarItems(route: IRoute): ISidebarItem {
  if (route.index || route.hidden) return {} as ISidebarItem;

  if (route.ability)
    return {
      name: route.name,
      path: '/' + route.path,
      icon: route.icon,
      ability: route.ability,
      children: [],
    } as ISidebarItem;

  return {
    name: route.name,
    path: '/' + route.path,
    icon: route.icon,
    ability: route.ability,
    children: route.childrens
      ?.map((children) => {
        if (children.index || children.hidden) return {} as ISidebarItem;

        return {
          name: children.name,
          path: `/${route.path}/${children.path}`,
          ability: children.ability,
        };
      })
      .filter((r) => !!r.name),
  } as ISidebarItem;
}

export default function toSidebar(routes: Array<IRoute>): Array<ISidebarItem> {
  return routes.map((route) => toSidebarItems(route)).filter((r) => !!r.name);
}

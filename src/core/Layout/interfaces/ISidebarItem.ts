import { ReactNode } from 'react';

interface ItemChildren {
  name?: string;
  path?: string;
}

export default interface ISidebarItem {
  icon: ReactNode;
  name: string;
  path?: string;
  children?: Array<ItemChildren>;
}

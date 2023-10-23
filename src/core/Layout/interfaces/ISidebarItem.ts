import EAbilityReference from '@/modules/role/domain/enums/EAbilityReference';
import { ReactNode } from 'react';

interface ItemChildren {
  name?: string;
  path?: string;
  ability?: EAbilityReference;
}

export default interface ISidebarItem {
  icon: ReactNode;
  name: string;
  path?: string;
  ability?: EAbilityReference;
  children?: Array<ItemChildren>;
}

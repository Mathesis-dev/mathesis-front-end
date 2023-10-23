import { ReactNode } from 'react';

interface IRoute {
  hidden?: boolean;
  index?: boolean;
  name?: string;
  path?: string;
  icon?: ReactNode;
  element?: ReactNode;
  childrens?: Array<IRoute>;
}

export default IRoute;

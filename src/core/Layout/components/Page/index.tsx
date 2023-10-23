import { Fragment, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Page({ children }: Props) {
  return <Fragment>{children}</Fragment>;
}

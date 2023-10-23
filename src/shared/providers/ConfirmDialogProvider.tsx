import { ReactNode, useState } from 'react';
import ConfirmDialogContext from '../contexts/ConfirmDialogContext';
import IConfirmDialog from '../domain/interfaces/IConfirmDialog';
import ConfirmDialog from '../components/Dialogs/Confirm';

interface Props {
  children: ReactNode;
}

export default function ConfirmDialogProvider({ children }: Props) {
  const [state, setState] = useState<IConfirmDialog>({
    open: false,
    title: '',
    description: '',
  });

  function handleState(value: IConfirmDialog) {
    setState(value);
  }

  return (
    <ConfirmDialogContext.Provider value={{ state, setState: handleState }}>
      {children}
      <ConfirmDialog />
    </ConfirmDialogContext.Provider>
  );
}

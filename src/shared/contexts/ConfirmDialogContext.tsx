import { createContext } from 'react';
import IConfirmDialog from '../domain/interfaces/IConfirmDialog';

const initialConfirmContext: IConfirmDialog = {
  open: false,
  title: '',
  description: '',
};

export interface IConfirmDialogContext {
  state: IConfirmDialog;
  setState: (value: IConfirmDialog) => void;
}

const ConfirmDialogContext = createContext<IConfirmDialogContext>({
  state: initialConfirmContext,
  setState: (value: IConfirmDialog) => {},
});

export default ConfirmDialogContext;

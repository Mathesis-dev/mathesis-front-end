import { ReactNode, useContext } from 'react';
import IConfirmDialog from '../domain/interfaces/IConfirmDialog';
import ConfirmDialogContext from '../contexts/ConfirmDialogContext';

export default function useConfirmDialog() {
  const { state, setState } = useContext(ConfirmDialogContext);

  async function openConfirmDialog(
    title: string,
    description: string | ReactNode,
    continueLabel?: string,
    cancelLabel?: string,
    onlyCancel?: boolean
  ) {
    const value: IConfirmDialog = {
      open: true,
      title,
      description,
      cancelLabel,
      continueLabel,
      onlyCancel,
    };

    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      value.continue = resolve;
      value.cancel = reject;
    });

    setState(value);

    return promise;
  }

  function resolveConfirmDialog(propagate: boolean) {
    setState({
      ...state,
      open: false,
    });

    if (state.continue) state.continue(propagate);
  }

  function cancelConfirmDialog() {
    setState({
      ...state,
      open: false,
    });

    if (state.cancel) state.cancel('Confirmação cancelada.');
  }

  return {
    confirmDialog: state,
    openConfirmDialog,
    resolveConfirmDialog,
    cancelConfirmDialog,
  };
}

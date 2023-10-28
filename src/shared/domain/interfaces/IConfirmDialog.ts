import { ReactNode } from 'react';

export default interface IConfirmDialog {
  open: boolean;
  title: string;
  description: string | ReactNode;
  cancelLabel?: string;
  continueLabel?: string;
  onlyCancel?: boolean;
  cancel?: (reason: any) => void;
  continue?: (value: boolean) => void;
}

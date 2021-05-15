import { DialogOptions } from '@common/types';
import React, {
  createContext, useCallback, useRef, useState,
} from 'react';
import ConfirmationDialog from '../../components/ConfirmationDialog';

export type DialogContextType = (options: DialogOptions) => Promise<void>;

export const DialogContext = createContext<DialogContextType>(Promise.reject);

export const DialogProvider: React.FC = ({ children }) => {
  const [dialogState, setDialogState] = useState<DialogOptions | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const promiseRef = useRef<{
    resolve: () => void;
    reject: () => void;
  }>();

  const openDialog = useCallback((options: DialogOptions) => {
    setDialogState(options);
    setIsOpen(true);
    return new Promise<void>((resolve, reject) => {
      promiseRef.current = { resolve, reject };
    });
  }, []);

  const handleClose = () => {
    if (dialogState?.catchCancel && promiseRef.current) {
      promiseRef.current.reject();
    }
    setIsOpen(false);
  };

  const handleConfirm = () => {
    if (promiseRef.current) {
      promiseRef.current.resolve();
    }
    setIsOpen(false);
  };

  return (
    <DialogContext.Provider value={openDialog}>
      {children}
      <ConfirmationDialog
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        {...dialogState}
      />
    </DialogContext.Provider>
  );
};

import React from 'react';
import { DialogContext, DialogContextType } from '../contexts/DialogContext';

const useDialog = (): DialogContextType => {
  const context = React.useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};

export default useDialog;

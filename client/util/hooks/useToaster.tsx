import React from 'react';
import { toast } from 'react-toastify';
import Notification from '../../components/Notification';

type ToasterFunc = (msg: string) => void;

type Types = 'success' | 'error';

const useToaster = (): Record<Types, ToasterFunc> => {
  const error = (msg: string) => {
    toast.error(<Notification message={msg} type="error" />);
  };

  const success = (msg: string) => {
    toast.success(<Notification message={msg} type="success" />);
  };

  return {
    error,
    success,
  };
};

export default useToaster;

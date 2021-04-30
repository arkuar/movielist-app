import React from 'react';
import { ToastProps } from 'react-toastify';
import { ExclamationCircleIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { Icon } from '@common/types';

interface NotificationProps {
  message: string;
}

const className = 'h-6 w-6';

const Notification: React.FC<NotificationProps & Partial<ToastProps>> = ({ message, type }) => {
  const getIcon = (): JSX.Element => {
    let icon: Icon;
    switch (type) {
      case 'error':
        icon = ExclamationCircleIcon;
        break;
      case 'success':
        icon = CheckCircleIcon;
        break;
      default:
        icon = InformationCircleIcon;
        break;
    }
    return icon({ className });
  };

  return (
    <div className="relative">
      <div className="absolute left-0 h-full w-10">
        {getIcon()}
      </div>
      <p className="pl-10">
        {message}
      </p>
    </div>
  );
};

export default Notification;

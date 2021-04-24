import React from 'react';
import { Icon } from '@common/types';

interface SubmitButtonProps {
  text: string;
  IconComponent?: Icon;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text, IconComponent, disabled,
}) => (
  <div className="flex w-full pt-4">
    <button
      className={`bg-blue-500 ${!disabled ? 'hover:bg-blue-700' : 'cursor-default'} rounded-md flex items-center justify-center w-full transition duration-150 ease-in text-white py-2 disabled:opacity-50`}
      type="submit"
      disabled={disabled}
    >
      <span className={`font-semibold ${IconComponent ? 'mr-2' : ''}`}>{text}</span>
      {IconComponent && (
        <IconComponent className="h-6 w-6" />
      )}
    </button>
  </div>
);

export default SubmitButton;

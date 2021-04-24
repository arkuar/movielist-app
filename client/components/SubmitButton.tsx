import React from 'react';
import { LoginIcon } from '@heroicons/react/outline';

const SubmitButton: React.FC = () => (
  <div className="flex w-full pt-4">
    <button
      className="bg-blue-500 hover:bg-blue-700 rounded-md flex items-center justify-center w-full transition duration-150 ease-in text-white py-2"
      type="submit"
    >
      <span className="mr-2 uppercase">Login</span>
      <LoginIcon className="h-6 w-6" />
    </button>
  </div>
);

export default SubmitButton;

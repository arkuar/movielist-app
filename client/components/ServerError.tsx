import React from 'react';

interface ServerErrorProps {
  message?: string;
}

const ServerError: React.FC<ServerErrorProps> = ({ message }) => (
  <>
    {
      !!message && (
        <div className="text-red-500">{message}</div>
      )
    }
  </>
);

export default ServerError;

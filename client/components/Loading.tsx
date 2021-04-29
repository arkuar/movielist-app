import React from 'react';

const Loading: React.FC = () => (
  <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
    <div className="border-t-2 spinner border-b-2 rounded-full border-gray-600 h-44 w-44" />
  </div>
);

export default Loading;

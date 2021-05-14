import React from 'react';

const ReviewItemContainer: React.FC = ({ children }) => (
  <div className="flex flex-col md:flex-row border-b-2 border-t-2 md:border-2 border-gray-300 md:items-center md:rounded-md p-5 my-5 bg-gray-100">
    {children}
  </div>
);

export default ReviewItemContainer;

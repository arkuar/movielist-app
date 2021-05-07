import React from 'react';

interface FormContainerProps {
  title: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ title, children }) => (
  <div className="flex flex-col items-center my-10 px-5 md:px-0 mx-auto max-w-md">
    <div className="font-medium uppercase text-gray-800 text-2xl lg:text-3xl">{title}</div>
    {children}
  </div>
);

export default FormContainer;

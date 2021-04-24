import React from 'react';

interface LabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({
  htmlFor, label, required,
}) => (
  <label htmlFor={htmlFor}>
    <span className="font-semibold text-gray-500">
      {label}
    </span>
    {required && (
      <span className="text-red-600 font-semibold pl-1">*</span>
    )}
  </label>
);

export default Label;

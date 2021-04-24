import { Icon as IconType } from '@common/types';
import { ErrorMessage, Field } from 'formik';
import React from 'react';
import Label from './Label';

interface TextInputProps {
  name: string;
  type: string;
  label?: string;
  IconComponent?: IconType;
  placeholder?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label, name, type, IconComponent, placeholder, required,
}) => (
  <div className="py-4">
    {label
      && (
        <Label htmlFor={name} label={label} required={required} />
      )}
    <div className="relative pt-1">
      <Field className={`rounded-md ${IconComponent && 'pl-10'} w-full bg-gray-50 placeholder-gray-40`} id={name} type={type} name={name} placeholder={placeholder} />
      {IconComponent
        && (
          <div className="inline-flex justify-center items-center absolute left-0 h-full w-10 text-gray-400">
            {IconComponent && <IconComponent className="h-6 w-6" />}
          </div>
        )}
    </div>
    <ErrorMessage name={name} component="div" className="text-red-500" />
  </div>
);

export default TextInput;

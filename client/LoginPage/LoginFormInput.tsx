import { Icon as IconType } from '@common/types';
import { ErrorMessage, Field } from 'formik';
import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  IconComponent?: IconType;
}

const LoginFormInput: React.FC<FormInputProps> = ({
  label, name, type, IconComponent,
}) => (
  <div className="py-4">
    <label>
      <span className="tracking-wide text-gray-500">
        {label}
        :
      </span>
      <div className="relative">
        <Field className="rounded-md pl-10 w-full bg-gray-100 placeholder-gray-400" type={type} name={name} placeholder={label} />
        <div className="inline-flex justify-center items-center absolute left-0 h-full w-10 text-gray-400">
          {IconComponent && <IconComponent className="h-6 w-6" />}
        </div>
      </div>
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </label>
  </div>
);

export default LoginFormInput;

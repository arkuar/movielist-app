import { Icon as IconType } from '@common/types';
import { ErrorMessage, FieldHookConfig, useField } from 'formik';
import React from 'react';
import Label from './Label';

type TextInputProps = {
  label?: string;
  IconComponent?: IconType;
  multiline?: boolean;
} & FieldHookConfig<string>;

const genericClassNames = 'rounded-md w-full bg-gray-50 placeholder-gray-40';

const TextInput: React.FC<TextInputProps> = ({
  label, IconComponent, multiline, ...props
}) => {
  const [field, meta] = useField(props);
  const {
    name, required, placeholder, type,
  } = props;

  const errors = meta.touched && meta.error;

  return (
    <div className="py-4">
      {label
        && (
          <Label htmlFor={name} label={label} required={required} />
        )}
      <div className="relative pt-1">
        {multiline
          ? (
            <textarea
              className={`${genericClassNames} ${errors ? 'border-red-500' : ''}`}
              id={name}
              placeholder={placeholder}
              {...field}
            />
          )
          : (
            <input
              className={`${genericClassNames} ${IconComponent ? 'pl-10' : ''} ${errors ? 'border-red-500' : ''}`}
              placeholder={placeholder}
              type={type}
              id={name}
              {...field}
            />
          )}
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
};

export default TextInput;

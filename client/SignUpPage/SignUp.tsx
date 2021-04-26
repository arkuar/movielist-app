import { SignUpValues } from '@common/types';
import React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import {
  object, SchemaOf, string, ref,
} from 'yup';
import usersService from '../util/services/users';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
import ServerError from '../components/ServerError';
import useLogin from '../util/hooks/useLogin';

const initialValues: SignUpValues = {
  username: '',
  name: undefined,
  password: '',
  passwordConfirmation: '',
};

const SignUpSchema: SchemaOf<SignUpValues> = object({
  username: string()
    .min(3, 'Username must be at least 3 characters')
    .max(30)
    .trim()
    .required('Username is required'),
  password: string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
  passwordConfirmation: string()
    .oneOf([ref('password')], 'Password does not match')
    .required('Password confirmation is required'),
  name: string(),
});

const SignUp: React.FC = () => {
  const logIn = useLogin();

  const onSubmit = async (
    values: SignUpValues,
    { setStatus, setFieldError }: FormikHelpers<SignUpValues>,
  ) => {
    try {
      const { username, name, password } = values;
      await usersService.signup({ username, name, password });
      await logIn({ username, password });
    } catch (exception) {
      const { error, field } = exception.response.data;
      if (field) {
        setFieldError(field, error);
      } else {
        setStatus(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center my-10 px-5 md:px-0 mx-auto max-w-md">
      <div className="font-medium uppercase text-gray-800 text-2xl lg:text-3xl">Create account</div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={onSubmit}
      >
        {({ status, isValid, dirty }) => (
          <Form className="mt-5 w-full">
            <TextInput label="Username" name="username" type="text" required />
            <TextInput label="Password" name="password" type="password" required />
            <TextInput label="Password confirmation" name="passwordConfirmation" type="password" required />
            <ServerError message={status} />
            <SubmitButton text="Create account" disabled={!(isValid && dirty)} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;

import { LoginValues } from '@common/types';
import {
  Form, Formik, FormikHelpers,
} from 'formik';
import { UserIcon, LockClosedIcon, LoginIcon } from '@heroicons/react/outline';
import React from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import loginService from '../util/services/login';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
import ServerError from '../components/ServerError';

const initialValues: LoginValues = {
  username: '',
  password: '',
};

const LoginSchema: yup.SchemaOf<LoginValues> = yup.object().shape({
  username: yup.string()
    .trim()
    .required('Username is required'),
  password: yup.string()
    .trim()
    .required('Password is required'),
});

const Login: React.FC = () => {
  const history = useHistory();

  const onSubmit = async (values: LoginValues, { setStatus }: FormikHelpers<LoginValues>) => {
    try {
      const user = await loginService.login(values);
      window.localStorage.setItem('userToken', JSON.stringify(user));
      history.push('/');
    } catch (error) {
      const { data: message } = error.response;
      setStatus(message);
    }
  };

  return (
    <div className="flex flex-col items-center my-10 px-5 md:px-0 mx-auto max-w-md">
      <div className="font-medium uppercase text-gray-800 text-2xl lg:text-3xl">Login to your account</div>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {({ status }) => (
          <Form className="mt-5 w-full">
            <TextInput name="username" type="text" label="Username" IconComponent={UserIcon} />
            <TextInput name="password" type="password" label="Password" IconComponent={LockClosedIcon} />
            <ServerError message={status} />
            <SubmitButton text="Login" IconComponent={LoginIcon} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

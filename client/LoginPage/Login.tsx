import { LoginValues } from '@common/types';
import {
  Form, Formik, FormikHelpers,
} from 'formik';
import { UserIcon, LockClosedIcon } from '@heroicons/react/outline';
import React from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import loginService from '../util/services/login';
import LoginFormInput from './LoginFormInput';

const initialValues: LoginValues = {
  username: '',
  password: '',
};

const LoginSchema = yup.object().shape({
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
            <LoginFormInput name="username" type="text" label="Username" IconComponent={UserIcon} />
            <LoginFormInput name="password" type="password" label="Password" IconComponent={LockClosedIcon} />
            {!!status && <div className="text-red-500">{status}</div>}
            <div className="flex w-full pt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 rounded-md flex items-center justify-center w-full transition duration-150 ease-in text-white py-2"
                type="submit"
              >
                <span className="mr-2 uppercase">Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

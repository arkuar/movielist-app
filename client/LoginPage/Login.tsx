import { LoginValues } from '@common/types';
import {
  Form, Formik, FormikHelpers,
} from 'formik';
import { UserIcon, LockClosedIcon, LoginIcon } from '@heroicons/react/outline';
import React from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
import ServerError from '../components/ServerError';
import useLogin from '../util/hooks/useLogin';
import FormContainer from '../components/FormContainer';

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
  const logIn = useLogin();
  const history = useHistory();

  const onSubmit = async (values: LoginValues, { setStatus }: FormikHelpers<LoginValues>) => {
    try {
      await logIn(values);
      history.push('/');
    } catch (error) {
      const { data: message } = error.response;
      setStatus(message);
    }
  };

  return (
    <FormContainer title="Login to your account">
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
    </FormContainer>
  );
};

export default Login;

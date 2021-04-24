import { SignUpValues } from '@common/types';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const initialValues: SignUpValues = {
  username: '',
  name: undefined,
  password: '',
  passwordConfirmation: '',
};

const SignUp: React.FC = () => {
  const onSubmit = async (values: SignUpValues) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center my-10 px-5 md:px-0 mx-auto max-w-md">
      <div className="font-medium uppercase text-gray-800 text-2xl lg:text-3xl">Create account</div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="mt-5 w-full">
          <Field type="text" name="username" placeholder="Username" />
          <button type="submit">Create account</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;

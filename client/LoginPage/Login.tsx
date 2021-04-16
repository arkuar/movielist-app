import { Field, Form, Formik } from 'formik';
import React from 'react';

interface Values {
  username: string;
  password: string;
}

const initialValues: Values = {
  username: '',
  password: '',
};

const onSubmit = async (values: Values) => {
  console.log(values);
};

const Login: React.FC = () => (
  <div className="flex flex-col items-center mb-6">
    <div>Login</div>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="username">Username</label>
        <Field id="username" name="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <Field id="password" name="password" placeholder="Passowrd" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  </div>
);

export default Login;

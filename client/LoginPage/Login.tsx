import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

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

const LoginSchema = yup.object().shape({
  username: yup.string()
    .trim()
    .required('Username is required'),
  password: yup.string()
    .trim()
    .required('Password is required'),
});

const Login: React.FC = () => (
  <div className="flex flex-col items-center my-10 px-5 md:px-0 mx-auto max-w-md">
    <div className="font-medium uppercase text-gray-800 text-2xl lg:text-3xl">Login to your account</div>
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {
        ({ errors, touched }) => (
          <Form className="mt-5 w-full">
            <div className="py-4">
              <label htmlFor="username">
                <span className="tracking-wide text-gray-500">Username:</span>
                <div className="relative">
                  <Field className="rounded-md pl-10 w-full bg-gray-100 placeholder-gray-400" id="username" type="text" name="username" placeholder="Username" />
                  <div className="inline-flex justify-center items-center absolute left-0 h-full w-10 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                {touched.username && errors.username && <div className="text-red-500">{errors.username}</div>}
              </label>
            </div>
            <div className="py-4">
              <label htmlFor="password">
                <span className="tracking-wide text-gray-500">Password:</span>
                <div className="relative">
                  <Field className="rounded-md pl-10 w-full bg-gray-100 placeholder-gray-400" id="password" name="password" type="password" placeholder="Password" />
                  <div className="inline-flex justify-center items-center absolute left-0 h-full w-10 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                {touched.password && errors.password && <div className="text-red-500">{errors.password}</div>}
              </label>
            </div>
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
        )
      }
    </Formik>
  </div>
);

export default Login;

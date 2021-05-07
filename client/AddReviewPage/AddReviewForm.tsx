import { ReviewValues } from '@common/types';
import { Form, Formik } from 'formik';
import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import {
  SchemaOf, object, string, number,
} from 'yup';
import FormContainer from '../components/FormContainer';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const initialValues: ReviewValues = {
  movie: '',
  rating: 0,
  text: '',
};

const ReviewSchema: SchemaOf<ReviewValues> = object({
  movie: string()
    .required('Movie is required'),
  rating: number()
    .min(0)
    .max(10)
    .required('Rating is required'),
  text: string()
    .min(5, 'Review must be longer than 5 characters')
    .required('Review is required'),
});

const AddReviewForm: React.FC = () => {
  const onSubmit = (values: ReviewValues) => {
    console.log(values);
  };

  return (
    <FormContainer title="Create reviw">
      <Formik
        initialValues={initialValues}
        validationSchema={ReviewSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="mt-5 w-full">
            <TextInput label="Movie" name="movie" type="text" required />
            <TextInput label="Rating" name="rating" type="number" min="1" max="10" required />
            <TextInput label="Review" name="text" type="text" multiline required />
            <SubmitButton text="Create review" IconComponent={PlusCircleIcon} />
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default AddReviewForm;

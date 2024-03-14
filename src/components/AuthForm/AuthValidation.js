import * as Yup from 'yup';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const signUpValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(emailPattern, 'Error email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const signInValidationSchema = Yup.object({
  email: Yup.string()
    .matches(emailPattern, 'Error email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

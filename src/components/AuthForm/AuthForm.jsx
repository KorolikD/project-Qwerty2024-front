
import { useFormik } from 'formik';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

import { Input, Button } from './AuthForm.styled';



const SignUpForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, action) => {
      dispatch(register(values));
      action.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input
          id="name"
          type="text"
          placeholder="Name"
          {...formik.getFieldProps('name')}
        />
      </div>

      <div>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          {...formik.getFieldProps('email')}
        />
      </div>

      <div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...formik.getFieldProps('password')}
        />
      </div>

      <Button type="primary" htmlType="submit">
        Sign Up
      </Button>
    </form>
  );
};


const SignInForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    
      onSubmit: (values, action) => {
        dispatch(register(values));
        action.resetForm();
      },
   
    
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          {...formik.getFieldProps('email')}
        />
      </div>

      <div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...formik.getFieldProps('password')}
        />
      </div>

      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
    </form>
  );
};


const AuthForm = ({ type }) => {
  return type === 'SignUp' ? <SignUpForm /> : <SignInForm />;
};

export default AuthForm;


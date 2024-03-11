import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register, logIn } from '../../redux/auth/authOperations';
import { Input, Button, Link, Paragraph } from './AuthForm.styled';
import {
  signUpValidationSchema,
  signInValidationSchema,
} from './AuthValidation';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
    validationSchema: signUpValidationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
      </div>

      <div>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
      </div>

      <Button type="primary" htmlType="submit">
        Sign Up
      </Button>
      <Paragraph>
        Already have an account?&nbsp;<Link to="/signin">Sign In</Link>
      </Paragraph>
    </form>
  );
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(logIn(values));
      resetForm();
    },
    validationSchema: signInValidationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
      </div>

      <div>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
      </div>

      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
      <Paragraph>
        Don't have an account?&nbsp;<Link to="/signup">Sign Up</Link>
      </Paragraph>
    </form>
  );
};

const AuthForm = ({ type }) => {
  return type === 'SignUp' ? <SignUpForm /> : <SignInForm />;
};

export default AuthForm;

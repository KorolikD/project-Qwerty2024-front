import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { Input, Button, Link, Paragraph } from './AuthForm.styled';



const SignUpForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(register(values)); 
      formik.resetForm(); 
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input
          type="text"
          name="name" // Add name attribute
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />
      </div>

      <div>
        <Input
          type="email" // Corrected type
          name="email" // Add name attribute
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
      </div>

      <div>
        <Input
          type="password" // Corrected type
          name="password" // Add name attribute
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
      </div>

      <Button type="primary" htmlType="submit">
        Sign Up
      </Button>
      <Paragraph>Already have an account?&nbsp;<Link to="/signin">Sign In</Link></Paragraph>
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
    onSubmit: (values) => {
      dispatch(register(values)); 
      formik.resetForm(); 
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Input
          type="email" // Corrected type
          name="email" // Add name attribute
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
      </div>

      <div>
        <Input
          type="password" // Corrected type
          name="password" // Add name attribute
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
      </div>

      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
      <Paragraph>Don't have an account?&nbsp;<Link to="/signup">Sign Up</Link></Paragraph>
    </form>
  );
};

const AuthForm = ({ type }) => {
  return type === 'SignUp' ? <SignUpForm /> : <SignInForm />;
};

export default AuthForm;

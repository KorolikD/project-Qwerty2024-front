import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register, logIn } from '../../redux/auth/authOperations';
import { Form } from 'antd';

import {
  Input,
  Button,
  Link,
  Paragraph,
  InputPassword,
} from './AuthForm.styled';
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

  const checkStatus = (item) => {
    if (formik.touched[item] && formik.errors[item]) {
      return 'error';
    } else if (formik.touched[item] && !formik.errors[item]) {
      return 'success';
    }
    return '';
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Form.Item
        help={formik.errors.name || 'correct'}
        hasFeedback
        validateStatus={checkStatus('name')}
      >
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </Form.Item>

      <Form.Item
        help={formik.errors.email || 'correct'}
        hasFeedback
        validateStatus={checkStatus('email')}
      >
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </Form.Item>

      <Form.Item
        help={formik.errors.password || 'correct'}
        hasFeedback
        validateStatus={checkStatus('password')}
      >
        <InputPassword
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Sign Up
      </Button>
      <Paragraph>
        Already have an account?<Link to="/signin">Sign In</Link>
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
  const checkStatus = (item) => {
    if (formik.touched[item] && formik.errors[item]) {
      return 'error';
    } else if (formik.touched[item] && !formik.errors[item]) {
      return 'success';
    }
    return '';
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Form.Item
        help={formik.errors.email || 'correct'}
        hasFeedback
        validateStatus={checkStatus('email')}
      >
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </Form.Item>

      <Form.Item
        help={formik.errors.password || 'correct'}
        hasFeedback
        validateStatus={checkStatus('password')}
      >
        <InputPassword
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
      <Paragraph>
        Don't have an account?<Link to="/signup">Sign Up</Link>
      </Paragraph>
    </form>
  );
};

const AuthForm = ({ type }) => {
  return type === 'SignUp' ? <SignUpForm /> : <SignInForm />;
};

export default AuthForm;

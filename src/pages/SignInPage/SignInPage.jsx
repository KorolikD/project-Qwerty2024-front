import { useFormik } from 'formik';
import { logIn } from '../../redux/auth/authOperations.js';
import { useDispatch } from 'react-redux';

const SignInPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, action) => {
      dispatch(logIn(values));
      action.resetForm();
    },
  });
  return (
    <>
      <form style={{ marginTop: '100px' }} onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default SignInPage;

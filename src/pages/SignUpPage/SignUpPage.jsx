import { useFormik } from 'formik';
import { register } from '../../redux/auth/authOperations.js';
import { useDispatch } from 'react-redux';

const SignUpPage = () => {
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
    <>
      <form style={{ marginTop: '100px' }} onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />
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

export default SignUpPage;

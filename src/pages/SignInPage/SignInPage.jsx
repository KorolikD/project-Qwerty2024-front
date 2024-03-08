import { useFormik } from 'formik';
import { logIn } from '../../redux/auth/authOperations.js';
import { useDispatch } from 'react-redux';
import { Timer } from '../../components/Timer/Timer.jsx';
import { useState } from 'react';

const SignInPage = () => {
  const [timer, setTimer] = useState(30);
  console.log('🤬>>>  timer:\n', timer);

  const handleDataFromRenderTime = (data) => {
    setTimer(data);
  };

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

      <Timer time={3 * 60} onDataFromChild={handleDataFromRenderTime} />
    </>
  );
};

export default SignInPage;

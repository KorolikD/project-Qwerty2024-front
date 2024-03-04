import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, Radio, message } from 'antd';
import { updateUser } from '../../redux/auth/authOperations';
import { StyledButton } from '../Button/Button.styled';
import { useSelector } from 'react-redux';

const { Item } = Form;

const UserForm = () => {
  const userData = useSelector(state => state.auth.user);

  const initialValues = {
    name: userData.name || '', 
    email: userData.email || '', 
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
    blood: '',
    sex: '',
    levelActivity: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    height: Yup.number().min(150, 'Minimum height is 150').required('Required'),
    currentWeight: Yup.number().min(35, 'Minimum weight is 35').required('Required'),
    desiredWeight: Yup.number().min(35, 'Minimum weight is 35').required('Required'),
    birthday: Yup.date().required('Required').max(new Date(), 'Birthday must be in the past'),
    blood: Yup.number().required('Required').oneOf([1, 2, 3, 4], 'Invalid blood type'),
    sex: Yup.string().required('Required').oneOf(['male', 'female'], 'Invalid sex'),
    levelActivity: Yup.number().required('Required').oneOf([1, 2, 3, 4, 5], 'Invalid activity level'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await updateUser(values); 
      message.success('User data updated successfully');
    } catch (error) {
      message.error('Failed to update user data');
    }
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {(formikProps) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field as={Input} type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field as={Input} type="email" name="email" disabled />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height (cm)</label>
            <Field as={Input} type="number" name="height" />
            <ErrorMessage name="height" component="div" className="error-message" />
          </div>
          <Item
            name="currentWeight"
            label="Current Weight"
            rules={[
              { required: true, message: 'Please input your current weight!' },
              { type: 'number', min: 35, message: 'Weight must be at least 35 kg!' },
            ]}
          >
            <Input type="number"/>
          </Item>

          <Item
            name="desiredWeight"
            label="Desired Weight"
            rules={[
              { required: true, message: 'Please input your desired weight!' },
              { type: 'number', min: 35, message: 'Weight must be at least 35 kg!' },
            ]}
          >
            <Input type="number"/>
          </Item>

          <Item
            name="birthday"
            label="Birthday"
            rules={[
              { required: true, message: 'Please select your birthday!' },
              () => ({
                validator(_, value) {
                  const age = value ? new Date().getFullYear() - value.year() : 0;
                  if (age < 18) {
                    return Promise.reject('You must be older than 18 years!');
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            {/* <DatePicker  /> */}
          </Item>

          <Item
            name="blood"
            label="Blood Type"
            rules={[{ required: true, message: 'Please select your blood type!' }]}
          >
            <Radio.Group>
              <Radio.Button value={1}>1</Radio.Button>
              <Radio.Button value={2}>2</Radio.Button>
              <Radio.Button value={3}>3</Radio.Button>
              <Radio.Button value={4}>4</Radio.Button>
            </Radio.Group>
          </Item>

          <Item
            name="sex"
            label="Sex"
            rules={[{ required: true, message: 'Please select your sex!' }]}
          >
            <Radio.Group>
              <Radio.Button value="male">Male</Radio.Button>
              <Radio.Button value="female">Female</Radio.Button>
            </Radio.Group>
          </Item>

          <Item
            name="levelActivity"
            label="Level of Activity"
            rules={[{ required: true, message: 'Please select your level of activity!' }]}
          >
            <Radio.Group>
              <Radio.Button value={1}>Sedentary lifestyle (little or no physical activity)</Radio.Button>
              <Radio.Button value={2}>Light activity (light exercises/sports 1-3 days per week)</Radio.Button>
              <Radio.Button value={3}>Moderately active (moderate exercises/sports 3-5 days per week)</Radio.Button>
              <Radio.Button value={4}>Very active (intense exercises/sports 6-7 days per week)</Radio.Button>
              <Radio.Button value={5}>Extremely active (very strenuous exercises/sports and physical work)</Radio.Button>
            </Radio.Group>
          </Item>

          <Item>
            <StyledButton type="submit" variant="filled" disabled={formikProps.isSubmitting}>Save</StyledButton>
          </Item>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;

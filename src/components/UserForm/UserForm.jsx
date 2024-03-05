import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Input, message, Radio } from 'antd'; 
import { updateUser } from '../../redux/auth/authOperations';
import { StyledButton } from '../Button/Button.styled';
import { useSelector } from 'react-redux';
import validationSchema from './validationSchema';
import { selectIsRefresh } from '../../redux/auth/authSelectors'; 

const { Item } = Form;

const UserForm = () => {
  const userData = useSelector(state => state.auth.user);
  const isRefreshing = useSelector(selectIsRefresh); 

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

  const handleSubmit = async (values, { setSubmitting }) => {
    if (isRefreshing) { 
      message.warning('User data is being refreshed. Please wait.'); 
      return; 
    }

    try {
      await updateUser(values);
      message.success('User data updated successfully');
    } catch (error) {
      message.error('Failed to update user data');
    }
    setSubmitting(false);
  };

  const radioGroups = [
    {
      label: 'Blood Type',
      name: 'blood',
      options: [1, 2, 3, 4],
    },
    {
      label: 'Sex',
      name: 'sex',
      options: ['male', 'female'],
    },
    {
      label: 'Level of Activity',
      name: 'levelActivity',
      options: [
        'Sedentary lifestyle (little or no physical activity)',
        'Light activity (light exercises/sports 1-3 days per week)',
        'Moderately active (moderate exercises/sports 3-5 days per week)',
        'Very active (intense exercises/sports 6-7 days per week)',
        'Extremely active (very strenuous exercises/sports and physical work)'
      ],
    },
  ];

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
            label="Current Weight"
            rules={[
              { required: true, message: 'Please input your current weight!' },
              { type: 'number', min: 35, message: 'Weight must be at least 35 kg!' },
            ]}
          >
            <Input type="number" />
          </Item>

          <Item
            label="Desired Weight"
            rules={[
              { required: true, message: 'Please input your desired weight!' },
              { type: 'number', min: 35, message: 'Weight must be at least 35 kg!' },
            ]}
          >
            <Input type="number" />
          </Item>

          <Item
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
          
          {radioGroups.map((group, index) => (
            <Item key={index} label={group.label} name={group.name}>
              <Radio.Group>
                {group.options.map((option, idx) => (
                  <Radio key={idx} value={option}>{option}</Radio>
                ))}
              </Radio.Group>
            </Item>
          ))}

          <Item>
            <StyledButton type="submit" variant="filled" disabled={formikProps.isSubmitting}>Save</StyledButton>
          </Item>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;

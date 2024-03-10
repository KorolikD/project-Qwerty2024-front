import { useFormik } from 'formik';
import { Input, message, Form } from 'antd';
import validationSchema from './validationSchema';
import { StyledButton } from '../Button/Button.styled';
import Calendar from '../Calendar/Calendar';
import { StyledForm, Label, Radio, Wrapper } from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';

const radioGroups = [
  {
    label: 'Blood',
    name: 'blood',
    options: [1, 2, 3, 4],
  },
  {
    name: 'sex',
    options: ['male', 'female'],
  },
  {
    name: 'levelActivity',
    options: [
      'Sedentary lifestyle (little or no physical activity)',
      'Light activity (light exercises/sports 1-3 days per week)',
      'Moderately active (moderate exercises/sports 3-5 days per week)',
      'Very active (intense exercises/sports 6-7 days per week)',
      'Extremely active (very strenuous exercises/sports and physical work)',
    ],
  },
];
const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = (values) => {
    console.log(values);
    message.success('Class');
    dispatch(updateUser(values));
  };

  const formik = useFormik({
    initialValues: {
      name: user.name || '',
      email: user.email || '',
      height: user.height || '',
      currentWeight: user.currentWeight || '0',
      desiredWeight: user.desiredWeight || '0',
      birthday: user.birthday || '00/00/0000',
      blood: user.blood || '',
      sex: user.sex || '',
      levelActivity: user.levelActivity || '',
    },

    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <StyledForm
      onFinishFailed={() => message.error('Bly')}
      onFinish={formik.handleSubmit}
    >
      <Form.Item
        help={formik.errors.name}
        validateStatus={formik.errors.name ? 'error' : ''}
        hasFeedback
      >
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          style={{ color: 'rgba(239, 237, 232, 0.60)' }}
          readOnly
          disabled
        />
      </div>
      <Wrapper>
        <div>
          <Label htmlFor="height">Height</Label>
          <Input
            type="number"
            name="height"
            id="height"
            value={formik.values.height}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <Label htmlFor="currentWeight">Current Weight</Label>
          <Input
            type="number"
            name="currentWeight"
            id="currentWeight"
            value={formik.values.currentWeight}
            onChange={formik.handleChange}
          />
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <Label htmlFor="desiredWeight">Desired Weight</Label>
          <Input
            type="number"
            name="desiredWeight"
            id="desiredWeight"
            value={formik.values.desiredWeight}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <Label htmlFor="birthday">Date of birth</Label>
          <Calendar
            id="birthday"
            value={formik.values.birthday}
            onChange={(date) => formik.setFieldValue('birthday', date)}
          />
          {/*<DatePicker*/}
          {/*  id="birthday"*/}
          {/*  onChange={(date) => formik.setFieldValue('birthday', date)}*/}
          {/*/>*/}
        </div>
      </Wrapper>

      <Radio.Group
        onChange={formik.handleChange}
        value={formik.values.blood}
        name={radioGroups[0].name}
      >
        {radioGroups[0].options.map((item, index) => {
          return (
            <Radio key={index} value={item}>
              {item}
            </Radio>
          );
        })}
      </Radio.Group>

      <Radio.Group
        onChange={formik.handleChange}
        value={formik.values.sex}
        name={radioGroups[1].name}
      >
        {radioGroups[1].options.map((item, index) => {
          return (
            <Radio key={index} value={item}>
              {item}
            </Radio>
          );
        })}
      </Radio.Group>

      <Radio.Group
        onChange={formik.handleChange}
        value={formik.values.levelActivity}
        name={radioGroups[2].name}
      >
        {radioGroups[2].options.map((item, index) => {
          return (
            <Radio key={index} value={index + 1}>
              {item}
            </Radio>
          );
        })}
      </Radio.Group>

      {formik.values.isSubmitSuccessful && (
        <div style={{ color: 'green' }}>Form submitted successfully!</div>
      )}
      {formik.values.submitError && (
        <div style={{ color: 'red' }}>{formik.values.submitError}</div>
      )}
      <StyledButton type="submit" $type="filled">
        Save
      </StyledButton>
    </StyledForm>
  );
};

export default UserForm;

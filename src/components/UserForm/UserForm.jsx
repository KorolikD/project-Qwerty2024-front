import { useFormik } from 'formik';
import { Input, Radio } from 'antd'; 
import validationSchema from './validationSchema';
import { StyledButton } from '../Button/Button.styled';
import Calendar from '../Calendar/Calendar'; 
import { StyledForm, Label, Span, Wrapper } from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Submitting form with values:', values); 
    setSubmitting(true);

    return validationSchema
      .validate(values, { abortEarly: false })
      .then(() => dispatch(updateUser(values)))
      .then(() => {
        formik.setFieldValue('isSubmitSuccessful', true);
        formik.setFieldValue('submitError', null);
      })
      .catch(error => {
        formik.setFieldValue('isSubmitSuccessful', false);
        formik.setFieldValue('submitError', error.message || 'Failed to update user data');
      })
      .finally(() => {
        setSubmitting(false); 
      });
  };

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
        'Extremely active (very strenuous exercises/sports and physical work)'
      ],
    },
  ];

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
      isSubmitSuccessful: false,
      submitError: null,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>
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
          <Input type="number" name="height" id="height" value={formik.values.height} onChange={formik.handleChange} />
        </div>
        <div>
          <Label htmlFor="currentWeight">Current Weight</Label>
          <Input type="number" name="currentWeight" id="currentWeight" value={formik.values.currentWeight} onChange={formik.handleChange} />
        </div>
      </Wrapper>
      <Wrapper>  
        <div>
          <Label htmlFor="desiredWeight">Desired Weight</Label>
          <Input type="number" name="desiredWeight" id="desiredWeight" value={formik.values.desiredWeight} onChange={formik.handleChange} />
        </div>
        <div>
          <Label htmlFor="birthday">Date of birth</Label>
          <Calendar id="birthday" value={formik.values.birthday} onChange={date => formik.setFieldValue('birthday', date)} />
          {/* <DatePicker id="birthday" onChange={date => formik.setFieldValue('birthday', date)}/> */}
        </div>
      </Wrapper>
      {radioGroups.map((group, index) => (
        <Radio.Group key={index} name={group.name} value={formik.values[group.name]} onChange={formik.handleChange}>
          <Label>{group.label}</Label>
          {group.options.map((option, idx) => (
            <Radio key={idx} value={option}>
              <Span>{option}</Span>
            </Radio>
          ))}
        </Radio.Group>
      ))}
      {formik.values.isSubmitSuccessful && (
        <div style={{ color: 'green' }}>Form submitted successfully!</div>
      )}
      {formik.values.submitError && (
        <div style={{ color: 'red' }}>{formik.values.submitError}</div>
      )}
      <StyledButton type="submit" $type="filled" >
        Save
      </StyledButton>
    </StyledForm>
  );
};

export default UserForm;

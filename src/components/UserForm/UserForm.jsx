import { useFormik } from 'formik';
import { Input, message, Form } from 'antd';
import validationSchema from './validationSchema';
import { StyledButton } from '../Button/Button.styled';
import { StyledForm, Label, Radio, Wrapper } from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/auth/authOperations';
import radioGroups from './radioBtnConfig.js';
import { selectUser } from '../../redux/auth/authSelectors';
import SvgCustom from '../SvgCustom/index.js';
import theme from '../../styles/theme.js';
import dayjs from 'dayjs';

const UserForm = ({ date, setIsOpenCalendar }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = (values) => {
    const userInfo = {
      ...values,
      birthday: date,
    };
    console.log(userInfo);
    dispatch(updateUser(userInfo));
  };
  const checkStatus = (value) => {
    if (formik.touched[value] && !formik.errors[value]) {
      return 'success';
    } else if (formik.errors[value]) {
      return 'error';
    }
    return '';
  };

  const formik = useFormik({
    initialValues: {
      name: user.name || '',
      email: user.email || '',
      height: user.height || '0',
      currentWeight: user.currentWeight || '0',
      desiredWeight: user.desiredWeight || '0',
      birthday: user.birthday || '00/00/0000',
      blood: user.blood || '',
      sex: user.sex || '',
      levelActivity: user.levelActivity || '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <StyledForm onFinish={formik.handleSubmit}>
      <Form.Item
        help={formik.errors.name}
        validateStatus={checkStatus('name')}
        hasFeedback
        label="Name"
      >
        <Input
          placeholder="Your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          required
          onBlur={formik.handleBlur}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          style={{ color: 'rgba(239, 237, 232, 0.60)' }}
          readOnly
          disabled
        />
      </Form.Item>
      <Wrapper>
        <Form.Item
          label="Height"
          help={formik.errors.height}
          validateStatus={checkStatus('height')}
          hasFeedback
        >
          <Input
            type="number"
            name="height"
            value={formik.values.height}
            onChange={formik.handleChange}
            required
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item
          label="Current Weight"
          help={formik.errors.currentWeight}
          validateStatus={checkStatus('currentWeight')}
          hasFeedback
        >
          <Input
            type="number"
            name="currentWeight"
            value={formik.values.currentWeight}
            onChange={formik.handleChange}
            required
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label="Desired Weight"
          help={formik.errors.desiredWeight}
          validateStatus={checkStatus('desiredWeight')}
          hasFeedback
        >
          <Input
            type="number"
            name="desiredWeight"
            value={formik.values.desiredWeight}
            onChange={formik.handleChange}
            required
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label="Date of birth"
          help={formik.errors.birthday}
          validateStatus={checkStatus('birthday')}
          hasFeedback
        >
          <Input
            type="text"
            onClick={() => setIsOpenCalendar(true)}
            name="birthday"
            value={date}
            required
            onBlur={formik.handleBlur}
            readOnly
          />
        </Form.Item>
      </Wrapper>
      <Form.Item
        label="Blood"
        help={formik.errors.blood}
        validateStatus={checkStatus('blood')}
        hasFeedback
      >
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
      </Form.Item>
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
      <StyledButton disabled={!formik.isValid} type="submit" $type="filled">
        Save
      </StyledButton>
    </StyledForm>
  );
};

export default UserForm;

import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import { Form } from 'antd';
import {
  StyledForm,
  Radio,
  Wrapper,
  Input,
  InputTextWrap,
  InputNumberWrap,
  RadioWrap,
  RadioGroupGap8,
  RadioGroupLevelActivity,
  CalendarInputWrap,
  Icon,
  CalendarWrap,
  InputsText,
  WrapActivity,
  ButtonForm,
} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/auth/authOperations';
import radioGroups from './radioBtnConfig.js';
import { selectUser } from '../../redux/auth/authSelectors';
import SvgCustom from '../SvgCustom/index.js';
import { useState } from 'react';
import Calendar from '../Calendar/index.js';
import './formStyles.css';

const UserForm = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [date, setDate] = useState(
    user.birthday ? user.birthday : '00.00.0000'
  );
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const handleSubmit = (values) => {
    const userInfo = {
      ...values,
      birthday: date,
    };

    dispatch(updateUser(userInfo));
  };
  const getMaxDate = () => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 18);
    return currentDate;
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
      <InputsText>
        <InputTextWrap
          label="Name"
          help={formik.errors.name}
          validateStatus={checkStatus('name')}
          hasFeedback
        >
          <Input
            placeholder="Your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            required
            onBlur={formik.handleBlur}
          />
        </InputTextWrap>
        <InputTextWrap label="Email">
          <Input
            placeholder="Your Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            style={{ color: 'rgba(239, 237, 232, 0.60)' }}
            readOnly
            disabled
          />
        </InputTextWrap>
      </InputsText>
      <Wrapper>
        <InputNumberWrap
          help={formik.errors.height}
          validateStatus={checkStatus('height')}
          hasFeedback
          label="Height"
        >
          <Input
            placeholder="Your Height"
            type="number"
            name="height"
            value={formik.values.height}
            onChange={formik.handleChange}
            required
            onBlur={formik.handleBlur}
          />
        </InputNumberWrap>
        <InputNumberWrap
          help={formik.errors.currentWeight}
          validateStatus={checkStatus('currentWeight')}
          hasFeedback
          label="Current Weight"
        >
          <Input
            placeholder="Your Current Weight"
            type="number"
            name="currentWeight"
            value={formik.values.currentWeight}
            onChange={formik.handleChange}
            required
            onBlur={formik.handleBlur}
          />
        </InputNumberWrap>

        <InputNumberWrap
          label="Desired Weight"
          help={formik.errors.desiredWeight}
          validateStatus={checkStatus('desiredWeight')}
          hasFeedback
        >
          <Input
            placeholder="Your Desired Weight"
            type="number"
            name="desiredWeight"
            value={formik.values.desiredWeight}
            onChange={formik.handleChange}
            required
            onBlur={formik.handleBlur}
          />
        </InputNumberWrap>

        <InputNumberWrap
          label="Date of birth"
          help={formik.errors.birthday}
          validateStatus={checkStatus('birthday')}
        >
          <CalendarInputWrap>
            <Input
              placeholder="Your Date of birth"
              type="text"
              onClick={() => setIsOpenCalendar(true)}
              name="birthday"
              value={date}
              required
              onBlur={formik.handleBlur}
              readOnly
            />
            <Icon>
              <SvgCustom icon="icon-calendar" stroke="#EFEDE8" size="18" />
            </Icon>
            <CalendarWrap>
              <Calendar
                date={date}
                setDate={setDate}
                maxDate={getMaxDate()}
                isOpen={isOpenCalendar}
                setIsOpen={setIsOpenCalendar}
              />
            </CalendarWrap>
          </CalendarInputWrap>
        </InputNumberWrap>
      </Wrapper>
      <RadioWrap>
        <Form.Item
          label="Blood"
          help={formik.errors.blood}
          validateStatus={checkStatus('blood')}
          hasFeedback
        >
          <RadioGroupGap8
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
          </RadioGroupGap8>
        </Form.Item>
        <Form.Item
          help={formik.errors.sex}
          validateStatus={checkStatus('sex')}
          hasFeedback
        >
          <RadioGroupGap8
            onChange={formik.handleChange}
            value={formik.values.sex}
            name={radioGroups[1].name}
          >
            {radioGroups[1].options.map((item, index) => {
              let capitalizedWord =
                item.charAt(0).toUpperCase() + item.slice(1);
              return (
                <Radio key={index} value={item}>
                  {capitalizedWord}
                </Radio>
              );
            })}
          </RadioGroupGap8>
        </Form.Item>
      </RadioWrap>
      <WrapActivity
        help={formik.errors.levelActivity}
        validateStatus={checkStatus('levelActivity')}
        hasFeedback
      >
        <RadioGroupLevelActivity
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
        </RadioGroupLevelActivity>
      </WrapActivity>
      <ButtonForm disabled={!formik.isValid}>Save</ButtonForm>
    </StyledForm>
  );
};

export default UserForm;

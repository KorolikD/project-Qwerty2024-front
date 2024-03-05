import * as Yup from 'yup';
  
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
  
export default validationSchema;

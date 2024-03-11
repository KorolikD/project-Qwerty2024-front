import { Formik, Form, Field } from 'formik';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/diary/operations';

const DATE_FORMAT = 'DD/MM/YYYY';

export const AddProductForm = ({
  productId,
  product,
  calories,
  onClose,
  onSuccessOpen,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { weight, calories } = values;
    const formattedDate = dayjs(Date.now()).format(DATE_FORMAT);
    const formData = { productId, date: formattedDate, weight, calories };
    alert(JSON.stringify(formData, null, 2));
    dispatch(addProduct(formData))
      .unwrap()
      .then((data) => {
        // alert(JSON.stringify(data, null, 2));
        onClose();
        onSuccessOpen();
      })
      .catch((error) => alert(JSON.stringify(error, null, 2)));
  };
  return (
    <>
      <Formik
        initialValues={{ product, weight: 0, calories: 0 }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Field type="text" name="product" disabled />
            <Field
              type="text"
              name="weight"
              onChange={(e) => {
                const weight = e.target.value;
                const calcCalories = (weight * calories) / 100;
                setFieldValue('calories', calcCalories);
                setFieldValue('weight', weight);
              }}
            />
            <Field type="text" name="calories" disabled />
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

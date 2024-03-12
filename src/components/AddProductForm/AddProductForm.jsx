import { Formik, Form, Field } from 'formik';
import dayjs from 'dayjs';
import axios from 'axios';

const DATE_FORMAT = 'DD/MM/YYYY';

export const AddProductForm = ({
  productId,
  product,
  calories,
  onClose,
  onSuccessOpen,
}) => {
  const postProductToDiary = async (requestBody) => {
    try {
      await axios.post(`/diary/product`, requestBody);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleSubmit = async (values) => {
    const { weight, calories } = values;
    const formattedDate = dayjs(Date.now()).format(DATE_FORMAT);
    const formData = { productId, date: formattedDate, weight, calories };

    await postProductToDiary(formData);
    onClose();
    onSuccessOpen();
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
                const parsedWeight = parseFloat(weight);
                if (!isNaN(parsedWeight) || weight === '') {
                  const calcCalories =
                    weight === ''
                      ? ''
                      : Math.round((parsedWeight * calories) / 100);
                  setFieldValue(
                    'calories',
                    isNaN(calcCalories) ? '' : calcCalories
                  );
                  setFieldValue(
                    'weight',
                    isNaN(parsedWeight) ? '' : parsedWeight
                  );
                }
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

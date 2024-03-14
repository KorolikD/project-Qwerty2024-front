import { Formik, Form } from 'formik';
import dayjs from 'dayjs';
import axios from 'axios';
import {
  AddProductBtnWrapper,
  AddProductCancelButton,
  AddProductInputWrapper,
  AddProductModalWrapper,
  AddProductSubmitButton,
  Calories,
  CaloriesWrapper,
  ProductInput,
  WeightInput,
  WeightInputWrapper,
} from './AddProductForm.styled';
import { useState } from 'react';
import toast from 'react-hot-toast';

const DATE_FORMAT = 'DD/MM/YYYY';

export const AddProductForm = ({
  productId,
  product,
  calories,
  onСonsumeСalories,
  onClose,
  onSuccessOpen,
}) => {
  const [totalCalories, setTotalCalories] = useState(0);

  const postProductToDiary = (requestBody) => {
    return axios.post(`/diary/product`, requestBody);
  };

  const handleSubmit = async (values) => {
    try {
      const { weight } = values;
      const formattedDate = dayjs(Date.now()).format(DATE_FORMAT);
      const formData = {
        productId,
        date: formattedDate,
        weight,
        calories: totalCalories,
      };

      await postProductToDiary(formData);
      onСonsumeСalories(totalCalories);
      onClose();
      onSuccessOpen();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <AddProductModalWrapper>
      <Formik
        initialValues={{ product, weight: 0, calories: 0 }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <AddProductInputWrapper>
              <ProductInput type="text" name="product" disabled />
              <WeightInputWrapper>
                <WeightInput
                  type="text"
                  name="weight"
                  onChange={(e) => {
                    const weight = e.target.value;
                    const parsedWeight = parseFloat(weight);
                    if (!isNaN(parsedWeight) || weight === '') {
                      const calcCalories =
                        weight === ''
                          ? 0
                          : Math.round((parsedWeight * calories) / 100);
                      setTotalCalories(isNaN(calcCalories) ? 0 : calcCalories);
                      setFieldValue(
                        'weight',
                        isNaN(parsedWeight) ? 0 : parsedWeight
                      );
                    }
                  }}
                />
              </WeightInputWrapper>
            </AddProductInputWrapper>
            <CaloriesWrapper>
              Calories: <Calories>{totalCalories || 0}</Calories>
            </CaloriesWrapper>
            <AddProductBtnWrapper>
              <AddProductSubmitButton type="submit">
                Submit
              </AddProductSubmitButton>
              <AddProductCancelButton type="button" onClick={onClose}>
                Cancel
              </AddProductCancelButton>
            </AddProductBtnWrapper>
          </Form>
        )}
      </Formik>
    </AddProductModalWrapper>
  );
};

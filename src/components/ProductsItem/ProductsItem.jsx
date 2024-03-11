import { useState } from 'react';

import { BasicModalWindow } from '../BasicModalWindow/BasicModalWindow';
import { AddProductForm } from '../AddProductForm/AddProductForm';
import { AddProductSuccess } from '../AddProductSuccess/AddProductSuccess';

export const ProductsItem = ({
  product: { _id, title, calories, category, weight, groupBloodNotAllowed },
  blood,
  isRecommend,
}) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [successModalIsOpen, setIsSuccessModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  function openSuccessModal() {
    setIsSuccessModalOpen(true);
  }

  function closeSuccessModal() {
    setIsSuccessModalOpen(false);
  }
  const recommendation = isRecommend(blood, groupBloodNotAllowed);
  return (
    <div>
      <p>Diet</p>
      <p>{recommendation}</p>
      <button onClick={openModal}>Add</button>
      <h3>{title}</h3>
      <ul>
        <li>calories: {calories}</li>
        <li>category: {category}</li>
        <li>weight: {weight}</li>
      </ul>
      {modalIsOpen && (
        <BasicModalWindow isOpen={modalIsOpen} onRequestClose={closeModal}>
          <AddProductForm
            product={title}
            calories={calories}
            productId={_id}
            onClose={closeModal}
            onSuccessOpen={openSuccessModal}
          />
        </BasicModalWindow>
      )}
      {successModalIsOpen && (
        <BasicModalWindow
          isOpen={successModalIsOpen}
          onRequestClose={closeSuccessModal}
        >
          <AddProductSuccess />
        </BasicModalWindow>
      )}
    </div>
  );
};

import { useState } from 'react';

import { BasicModalWindow } from '../BasicModalWindow/BasicModalWindow';
import { AddProductForm } from '../AddProductForm/AddProductForm';
import { AddProductSuccess } from '../AddProductSuccess/AddProductSuccess';
import icons from '../../img/sprite.svg';
import {
  Diet,
  Wrapper,
  Button,
  Recommendation,
  SvgAdd,
  WrapperTop,
  WrapperRecommend,
  WrapperForTitle,
  SpanRun,
  SvgRun,
  Title,
  ProductList,
  ProductItem,
  SpanItem,
} from './ProductsItem.styled';

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
    <Wrapper>
      <WrapperTop>
        <Diet>DIET</Diet>
        <WrapperRecommend>
          <Recommendation>{recommendation}</Recommendation>
          <Button onClick={openModal}>
            Add
            <SvgAdd width="16" height="16">
              <use href={icons + '#icon-next'} />
            </SvgAdd>
          </Button>
        </WrapperRecommend>
      </WrapperTop>
      <WrapperForTitle>
        <SpanRun>
          <SvgRun width="14" height="16">
            <use href={icons + '#icon-running'} />
          </SvgRun>
        </SpanRun>
        <Title>{title}</Title>
      </WrapperForTitle>
      <ProductList>
        <ProductItem>
          calories: <SpanItem>{calories}</SpanItem>
        </ProductItem>
        <ProductItem>
          category: <SpanItem>{category}</SpanItem>
        </ProductItem>
        <ProductItem>
          weight: <SpanItem>{weight}</SpanItem>
        </ProductItem>
      </ProductList>
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
    </Wrapper>
  );
};

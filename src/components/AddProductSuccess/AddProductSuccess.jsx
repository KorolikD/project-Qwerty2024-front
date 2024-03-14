import { Link } from 'react-router-dom';
import {
  InfoTextSuccessModal,
  LinkToDiaryWrapper,
  ModalButton,
  SuccessModalWrapper,
  AddProductSuccessTitle,
  AddProductSuccessWellDoneImg,
} from '../ExercisesItem/ExercisesSubcategoriesItem.styled';

import SvgCustom from '../SvgCustom/SvgCustom';
import theme from '../../styles/theme';
import likePicture from '../../img/avocado-1x.png';

export const AddProductSuccess = ({ onClose, calories }) => {
  return (
    <SuccessModalWrapper>
      <AddProductSuccessWellDoneImg src={likePicture} alt="Well done" />
      <AddProductSuccessTitle>Well done</AddProductSuccessTitle>

      <InfoTextSuccessModal>
        Calories: <span>{calories}</span>
      </InfoTextSuccessModal>
      <ModalButton onClick={onClose}>Next product</ModalButton>

      <LinkToDiaryWrapper>
        <Link style={{ color: 'inherit' }} to="/diary">
          To the diary
        </Link>
        <SvgCustom
          icon="icon-next"
          size="16"
          color={theme.colors.textWhite30}
        />
      </LinkToDiaryWrapper>
    </SuccessModalWrapper>
  );
};

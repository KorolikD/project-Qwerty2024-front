import { Link } from 'react-router-dom';
import {
  InfoTextSuccessModal,
  LinkToDiaryWrapper,
  ModalButton,
  SuccessModalWrapper,
  WellDoneImg,
} from '../ExercisesItem/ExercisesSubcategoriesItem.styled';
import { Title } from '../ProductsItem/ProductsItem.styled';
import SvgCustom from '../SvgCustom/SvgCustom';
import theme from '../../styles/theme';
import likePicture from '../../img/avocado-1x.png';

export const AddProductSuccess = ({ onClose, calories }) => {
  return (
    <SuccessModalWrapper>
      <WellDoneImg src={likePicture} alt="Well done" />
      <Title>Well done</Title>

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

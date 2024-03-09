import {
  ExerscisesItemContainer,
  BodyPart,
  BodyPartCategory,
  ExercisesItem,
} from './ExercisesSubcategoriesItem.styled';
import {
  CATEGORIES,
  Categories,
} from '../ExercisesCategories/ExercisesCategories';

const ExercisesSubcategoriesItem = ({ subcategory, onSelect }) => {
  return (
    <ExercisesItem
      onClick={() =>
        onSelect(subcategory.filter, subcategory.name.toLowerCase())
      }
    >
      <ExerscisesItemContainer
        style={{
          backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${subcategory.imgURL})`,
        }}
      >
        <BodyPart>{subcategory.name}</BodyPart>
        <BodyPartCategory>{subcategory.filter}</BodyPartCategory>
      </ExerscisesItemContainer>
    </ExercisesItem>
  );
};

export default ExercisesSubcategoriesItem;

import {
  ExerscisesItemContainer,
  BodyPart,
  BodyPartCategory,
  ExercisesItem,
} from './ExercisesSubcategoriesItem.styled';

export const ExercisesSubcategoriesItem = ({ subcategory }) => {
  return (
    <ExercisesItem>
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

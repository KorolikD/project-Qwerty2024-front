import {
  ExerscisesItemContainer,
  BodyPart,
  BodyPartCategory,
  ExercisesItemWrappoer,
} from './ExercisesSubcategoriesItem.styled';

const CustomExercisesItem = ({ subcategory }) => {
  return (
    <ExercisesItemWrappoer>
      <ExerscisesItemContainer
        style={{
          backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${subcategory.gifUrl})`,
        }}
      >
        <BodyPart>{subcategory.name}</BodyPart>
        <BodyPartCategory>{subcategory.bodyPart}</BodyPartCategory>
        <BodyPartCategory>{subcategory.target}</BodyPartCategory>
      </ExerscisesItemContainer>
    </ExercisesItemWrappoer>
  );
};

export default CustomExercisesItem;

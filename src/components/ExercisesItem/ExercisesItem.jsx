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
          backgroundColor: 'blue',
          backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5))`,
        }}
      >
        <BodyPart>{subcategory.name}</BodyPart>
        <BodyPartCategory>{subcategory.bodyPart}</BodyPartCategory>
        <BodyPartCategory>{subcategory.target}</BodyPartCategory>
        <BodyPartCategory>{subcategory.burnedCalories}</BodyPartCategory>
      </ExerscisesItemContainer>
    </ExercisesItemWrappoer>
  );
};

export default CustomExercisesItem;

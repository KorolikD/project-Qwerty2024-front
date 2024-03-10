import {
  ConteinerForIt,
  ExercisesItemWorkout,
  Workout,
  Button,
  NameContainer,
  NameFor,
  ExList,
  ExItem,
  SpanItem,
} from './ExercisesSubcategoriesItem.styled';

const CustomExercisesItem = ({ subcategory }) => {
  return (
    <ConteinerForIt>
      <ExercisesItemWorkout>
        <Workout>WORKOUT</Workout>
        <Button>Start</Button>
      </ExercisesItemWorkout>
      <NameContainer>
        <NameFor>{subcategory.name}</NameFor>
      </NameContainer>
      <ExList>
        <ExItem>
          Burned calories: <SpanItem>{subcategory.burnedCalories}</SpanItem>
        </ExItem>
        <ExItem>
          Body part: <SpanItem>{subcategory.bodyPart}</SpanItem>
        </ExItem>
        <ExItem>
          Target: <SpanItem>{subcategory.target}</SpanItem>
        </ExItem>
      </ExList>
    </ConteinerForIt>
  );
};

export default CustomExercisesItem;

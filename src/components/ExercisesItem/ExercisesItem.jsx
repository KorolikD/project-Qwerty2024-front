import icons from '../../img/sprite.svg';
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
  SvgStart,
  SpanRun,
  SvgRun,
} from './ExercisesSubcategoriesItem.styled';

const CustomExercisesItem = ({ subcategory }) => {
  return (
    <ConteinerForIt>
      <ExercisesItemWorkout>
        <Workout>WORKOUT</Workout>
        <Button>
          Start
          <SvgStart width="16" height="16">
            <use href={icons + '#icon-next'} />
          </SvgStart>
        </Button>
      </ExercisesItemWorkout>
      <NameContainer>
        <SpanRun>
          <SvgRun width="14" height="16">
            <use href={icons + '#icon-running'} />
          </SvgRun>
        </SpanRun>
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

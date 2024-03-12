import { useEffect, useState } from 'react';
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
  ExerciseModalListItem,
  ExerciseModalList,
  ModalTitle,
  ModalText,
  TrainingPreview,
  ModalWrapper,
  ModalButton,
  CaloriesText,
} from './ExercisesSubcategoriesItem.styled';

import { Link } from 'react-router-dom';
import { Timer } from '../Timer/Timer';
import { BasicModalWindow } from '../BasicModalWindow';

const CustomExercisesItem = ({ subcategory }) => {
  // console.log('🤬>>>  subcategory:\n', subcategory.burnedCalories);
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const [timeFromExerciseParam] = useState(subcategory.time);
  const [burnedCaloriesFromExerciseParam] = useState(
    subcategory.burnedCalories
  );

  const [time, setTimer] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);
  // console.log('🤬>>>  time:\n', time);
  // console.log('🤬>>>  burnedCalories:\n', burnedCalories);

  const handleDataFromRenderTime = (timeInSeconds) => {
    const minutes = Number(timeFromExerciseParam - timeInSeconds / 60);
    setTimer(minutes);
  };

  useEffect(() => {
    const handleBurnedCalories = () => {
      setBurnedCalories(
        Math.round(
          (burnedCaloriesFromExerciseParam / timeFromExerciseParam) * time
        )
      );
    };

    handleBurnedCalories();
  }, [burnedCaloriesFromExerciseParam, timeFromExerciseParam, time]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <ConteinerForIt>
      <BasicModalWindow isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalWrapper>
          <TrainingPreview src={subcategory.gifUrl} alt={subcategory.name} />

          <Timer
            time={timeFromExerciseParam}
            getDataFromTimer={handleDataFromRenderTime}
          />
          <CaloriesText>
            Burned calories: <span>{burnedCalories}</span>
          </CaloriesText>

          <ExerciseModalList>
            <ExerciseModalListItem>
              <ModalTitle>Name</ModalTitle>
              <ModalText>{subcategory.name}</ModalText>
            </ExerciseModalListItem>
            <ExerciseModalListItem>
              <ModalTitle>Target</ModalTitle>
              <ModalText>{subcategory.target}</ModalText>
            </ExerciseModalListItem>
            <ExerciseModalListItem>
              <ModalTitle>Body Part</ModalTitle>
              <ModalText>{subcategory.bodyPart}</ModalText>
            </ExerciseModalListItem>
            <ExerciseModalListItem>
              <ModalTitle>Equipment</ModalTitle>
              <ModalText>{subcategory.equipment}</ModalText>
            </ExerciseModalListItem>
          </ExerciseModalList>
          <ModalButton>Add to diary</ModalButton>
        </ModalWrapper>
        {/* <Link to="/diary">Diary</Link> */}
      </BasicModalWindow>

      <ExercisesItemWorkout>
        <Workout>WORKOUT</Workout>
        <Button onClick={openModal}>
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

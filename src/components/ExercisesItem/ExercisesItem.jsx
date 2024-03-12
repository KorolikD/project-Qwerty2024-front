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
  InfoText,
  TabletModalWrapperFirstColumn,
  TabletModalWrapperSecondColumn,
  WellDoneImg,
  Title,
  InfoTextSuccessModal,
  LinkToDiaryWrapper,
  SuccessModalWrapper,
} from './ExercisesSubcategoriesItem.styled';

import { Link } from 'react-router-dom';
import { Timer } from '../Timer/Timer';
import { BasicModalWindow } from '../BasicModalWindow';
import axios from 'axios';
import dayjs from 'dayjs';
import toast, { Toaster } from 'react-hot-toast';
import likePicture from '../../img/like-1x.png';
import SvgCustom from '../SvgCustom/SvgCustom';
import theme from '../../styles/theme';

const DATE_FORMAT = 'DD/MM/YYYY';

const CustomExercisesItem = ({ subcategory }) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [successModalIsOpen, setIsSuccessModalOpen] = useState(false);

  const [timeFromExerciseParam, setTimeFromExerciseParam] = useState(0);
  const [burnedCaloriesFromExerciseParam, setBurnedCaloriesFromExerciseParam] =
    useState(0);

  const [time, setTimer] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);

  const postExerciseToDiary = async (requestBody) => {
    try {
      await axios.post(`/diary/exercise`, requestBody);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  useEffect(() => {
    setTimeFromExerciseParam(subcategory.time);
    setBurnedCaloriesFromExerciseParam(subcategory.burnedCalories);
  }, [subcategory.time, subcategory.burnedCalories]);

  useEffect(() => {
    if (modalIsOpen === true) {
      setTimeFromExerciseParam(subcategory.time);
      setBurnedCaloriesFromExerciseParam(subcategory.burnedCalories);
    }
  }, [modalIsOpen, subcategory.time, subcategory.burnedCalories]);

  const handleFormSubmit = async () => {
    const { _id: exerciseId } = subcategory;
    const formattedDate = dayjs(Date.now()).format(DATE_FORMAT);

    const requestBody = {
      exerciseId,
      date: formattedDate,
      time,
      burnedCalories,
    };
    if (time < 1 || burnedCalories < 1) {
      toast.error('You should work out for more than one minute!');
      return;
    }

    alert(JSON.stringify(requestBody, null, 2));
    await postExerciseToDiary(requestBody);
    closeModal();
    openSuccessModal();
  };

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
      ),
        [burnedCaloriesFromExerciseParam, timeFromExerciseParam, time];
    };

    handleBurnedCalories();
  });

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

  return (
    <ConteinerForIt>
      <Toaster position="top-right" reverseOrder={false} />
      {modalIsOpen && (
        <BasicModalWindow isOpen={modalIsOpen} onRequestClose={closeModal}>
          <ModalWrapper>
            <TabletModalWrapperFirstColumn>
              <TrainingPreview
                src={subcategory.gifUrl}
                alt={subcategory.name}
              />

              <Timer
                time={timeFromExerciseParam}
                getDataFromTimer={handleDataFromRenderTime}
              />
              <InfoText>
                Burned calories: <span>{burnedCalories}</span>
              </InfoText>
            </TabletModalWrapperFirstColumn>

            <TabletModalWrapperSecondColumn>
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
              <ModalButton onClick={handleFormSubmit}>Add to diary</ModalButton>
            </TabletModalWrapperSecondColumn>
          </ModalWrapper>
        </BasicModalWindow>
      )}
      {successModalIsOpen && (
        <BasicModalWindow
          isOpen={successModalIsOpen}
          onRequestClose={closeSuccessModal}
        >
          <SuccessModalWrapper>
            <WellDoneImg src={likePicture} alt="Well done" />
            <Title>Well done</Title>
            <InfoTextSuccessModal style={{ marginBottom: '4px' }}>
              Your time: <span> 3 minutes</span>
            </InfoTextSuccessModal>
            <InfoTextSuccessModal>
              Burned calories: <span>150</span>
            </InfoTextSuccessModal>
            <ModalButton onClick={closeSuccessModal}>Next product</ModalButton>

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
        </BasicModalWindow>
      )}

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

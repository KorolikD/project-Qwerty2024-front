import { useEffect, useState } from 'react';
import {
  TimerWrapper,
  TimerClock,
  TimerTitle,
  TimerValue,
  TimerButton,
} from './Timer.styled';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import theme from '../../styles/theme';
import SvgCustom from '../SvgCustom/SvgCustom';

//* ===================================================================
// TODO Підключення в модалці для відправлення форми на бекенд
//! Стейт в якому будуть дані про кількість калорій і час з одної вправи exercises/params
// const [timeFromExerciseParam] = useState(3);
// const [burnedCaloriesFromExerciseParam] = useState(309);

//! Стейт даних для формування запиту на бекенд /diary/exercise
// const [time, setTimer] = useState(0);
// const [burnedCalories, setBurnedCalories] = useState(0);

// const handleDataFromRenderTime = (timeInSeconds) => {
//   const minutes = Number(timeFromExerciseParam - timeInSeconds / 60);
//   setTimer(minutes);
// };

// useEffect(() => {
//   const handleBurnedCalories = () => {
//     setBurnedCalories(
//       Math.round(
//         (burnedCaloriesFromExerciseParam / timeFromExerciseParam) * time
//       )
//     );
//   };

//   handleBurnedCalories();
// }, [burnedCaloriesFromExerciseParam, timeFromExerciseParam, time]);

//TODO  В рендер додати Розмітку таймера
// <Timer
//   time={timeFromExerciseParam}
//   getDataFromTimer={handleDataFromRenderTime}
// />;
//* ===================================================================

const timerProps = {
  isSmoothColorTransition: true, // ?-------Вказує, чи повинні кольори плавно переходити до наступного кольору
  trailColor: theme.colors.graphite, // ? --Колір контуру кола - приймає будь-який допустимий формат кольору
  isGrowing: false, // ? -------------------Вказується, чи повинен шлях прогресу зростати, а не скорочуватися
  rotation: 'clockwise', // ?---------------Напрямок обертання траєкторії прогресу
  strokeLinecap: 'round', // ? -------------Край контуру заокруглений
  strokeWidth: 4, // ?----------------------Ширина обведення контуру
  trailStrokeWidth: 4, // ?-----------------Ширина штриха колії
  updateInterval: 0, // ? ------------------Інтервал відображення секунд
  size: 124, // ?---------------------------Розмір кола
  isPlaying: false, // ? -------------------Цоб поставити на паузу
  colors: theme.colors.primary, // ? -------Кольори на якы змінювати коло
};

export const Timer = ({ time, getDataFromTimer }) => {
  const [playing, setPlaying] = useState(false);
  const [trainingCompleted, setTrainingCompleted] = useState(false);

  const handleButtonStart = () => {
    setPlaying(true);
  };

  const handleButtonStop = () => {
    setPlaying(false);
  };

  useEffect(() => {
    const handleSpaceKeyDown = (event) => {
      if (trainingCompleted) {
        return;
      }

      event.keyCode === 32 && !playing
        ? handleButtonStart()
        : handleButtonStop();
    };

    document.addEventListener('keydown', handleSpaceKeyDown);
    return () => {
      document.removeEventListener('keydown', handleSpaceKeyDown);
    };
  }, [playing, trainingCompleted]);

  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <TimerClock>
        <CountdownCircleTimer
          {...timerProps}
          duration={time * 60}
          initialRemainingTime={time * 60}
          isPlaying={playing}
          onUpdate={(remainingTime) => {
            remainingTime === 0 && setTrainingCompleted(true);
            getDataFromTimer(remainingTime);
          }}
          onComplete={() => ({
            shouldRepeat: false,
            delay: 1,
          })}
        >
          {({ remainingTime }) => renderTime(remainingTime)}
        </CountdownCircleTimer>
      </TimerClock>

      {playing === false || trainingCompleted === true ? (
        <TimerButton type="button" onClick={handleButtonStart}>
          {trainingCompleted !== true ? (
            <SvgCustom
              icon="icon-play"
              size="14"
              color={theme.colors.white}
              stroke={theme.colors.white}
            />
          ) : (
            <SvgCustom
              icon="icon-done"
              size="14"
              color={theme.colors.white}
              stroke={theme.colors.white}
            />
          )}
        </TimerButton>
      ) : (
        <TimerButton type="button" onClick={handleButtonStop}>
          <SvgCustom
            icon="icon-pause"
            size="14"
            color={theme.colors.white}
            stroke={theme.colors.white}
          />
        </TimerButton>
      )}
    </TimerWrapper>
  );
};

const renderTime = (remainingTime) => {
  if (remainingTime === 0) {
    return <TimerValue>Training completed!</TimerValue>;
  }

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <TimerValue>
      {`0${minutes}`}:{seconds < 10 ? `0${seconds}` : seconds}
    </TimerValue>
  );
};

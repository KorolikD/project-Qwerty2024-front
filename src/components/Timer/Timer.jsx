import { useState } from 'react';
import {
  TimerWrapper,
  TimerClock,
  TimerTitle,
  TimerValue,
  TimerButton,
} from './Timer.styled';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import theme from '../../styles/theme';

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

{
  /* <Timer time={3 * 60} />; // ! виклик компонента для підключення. Вимагає час в секундах. Ще не дороблений*/
}

export const Timer = ({ time, onDataFromChild }) => {
  const [playing, setPlaying] = useState(false);

  const handleButtonStart = () => {
    setPlaying(true);
  };

  const handleButtonStop = () => {
    setPlaying(false);
  };

  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <TimerClock>
        <CountdownCircleTimer
          {...timerProps}
          duration={time}
          initialRemainingTime={time}
          isPlaying={playing}
          onComplete={() => ({
            shouldRepeat: false,
            delay: 1,
          })}
        >
          {({ remainingTime }) =>
            renderTime(remainingTime, playing, onDataFromChild)
          }
        </CountdownCircleTimer>
      </TimerClock>

      {playing === false ? (
        <TimerButton type="button" onClick={handleButtonStart}>
          {/* <SvgCustom icon="icon-play" size="14" color={theme.colors.white} /> */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.91667 1.75L11.0833 7L2.91667 12.25V1.75Z"
              fill="#EFEDE8"
              stroke="#EFEDE8"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </TimerButton>
      ) : (
        <TimerButton type="button" onClick={handleButtonStop}>
          {/* <SvgCustom icon="icon-cross" size="10" color={theme.colors.white} /> */}
          <svg
            width="8"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.66629 9V1M7.33296 9V1"
              stroke="#EFEDE8"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </TimerButton>
      )}
    </TimerWrapper>
  );
};

const renderTime = (remainingTime, playing, onDataFromChild) => {
  const sendDataToParent = () => {
    onDataFromChild(remainingTime);
  };

  if (!playing) {
    sendDataToParent(remainingTime);
  }

  if (remainingTime === 0) {
    return <TimerValue>Training completed!</TimerValue>;
  }

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <TimerValue role="timer" aria-live="assertive">
      {minutes}:{seconds}
    </TimerValue>
  );
};

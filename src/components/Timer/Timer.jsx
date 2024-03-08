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

const renderTime = (remainingTime) => {
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

{
  /* <Timer time={3 * 60} />; // ! виклик компонента для підключення. Вимагає час в секундах. Ще не дороблений*/
}

export const Timer = ({ time }) => {
  const [timer, setTimer] = useState(0);
  const [run, setRun] = useState(false);
  const [playing, setPlaying] = useState(false);

  const onStart = () => {
    setRun(true);
  };

  const onStop = () => {
    setRun(false);
  };

  useEffect(() => {
    setTimer(time);
  }, [time]);

  useEffect(() => {
    run === false ? setPlaying(false) : setPlaying(true);
  }, [run]);

  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <TimerClock>
        <CountdownCircleTimer
          {...timerProps}
          duration={timer}
          initialRemainingTime={timer}
          isPlaying={playing}
          onComplete={() => ({
            shouldRepeat: false,
            delay: 1,
          })}

          //* {onComplete}--------------На анімації завершити обробник події
          //* {onUpdate}----------------Обробник події оновлення за залишковим часом
          //* {renderTime}--------------Функція рендерингу для налаштування часу/вмісту в центрі кола
        >
          {({ remainingTime, isPlaying }) =>
            renderTime(remainingTime, isPlaying, run)
          }
        </CountdownCircleTimer>
      </TimerClock>
      {run === false ? (
        <TimerButton type="button" onClick={onStart}>
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
        <TimerButton type="button" onClick={onStop}>
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

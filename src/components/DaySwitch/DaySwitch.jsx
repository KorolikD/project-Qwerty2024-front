import { useState } from 'react';
import dayjs from 'dayjs';
import Calendar from '../Calendar/Calendar';
import SvgCustom from '../SvgCustom/SvgCustom';
import theme from '../../styles/theme.js';

const DATE_FORMAT = 'DD/MM/YYYY';

const DaySwitch = ({ date, setDate, minDate }) => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const toNextDay = () => {
    const nextDay = dayjs(date, DATE_FORMAT).add(1, 'day').format(DATE_FORMAT);
    setDate(nextDay);
  };

  const toPrevDay = () => {
    const prevDay = dayjs(date, DATE_FORMAT)
      .subtract(1, 'day')
      .format(DATE_FORMAT);
    setDate(prevDay);
    // const formattedLimidDate = dayjs(minDate).format(DATE_FORMAT);
    // const prevDay = dayjs(date, DATE_FORMAT)
    //   .subtract(1, 'day')
    //   .format(DATE_FORMAT);
    // if (prevDay === formattedLimidDate) {
    //   return;
    // }
    // setDate(prevDay);
  };

  const onOpenCalendar = () => {
    setIsOpenCalendar((prev) => !prev);
  };

  return (
    <>
      <button onClick={onOpenCalendar}>
        <span>{date}</span>
        <SvgCustom
          icon="icon-calendar"
          size="20"
          stroke={theme.colors.secondary}
        />
      </button>
      <button onClick={toPrevDay}>
        <SvgCustom icon="icon-back" size="20" color={theme.colors.secondary} />
      </button>
      <button onClick={toNextDay}>
        <SvgCustom icon="icon-next" size="20" color={theme.colors.secondary} />
      </button>

      <Calendar
        date={date}
        setDate={setDate}
        minDate={minDate}
        isOpen={isOpenCalendar}
      />
    </>
  );
};

export default DaySwitch;

import { useState } from 'react';
import dayjs from 'dayjs';
import Calendar from '../Calendar/Calendar';
import SvgCustom from '../SvgCustom/SvgCustom';
import theme from '../../styles/theme.js';
import { DaySwitchWrap, SwitchWrap } from './DaySwitch.styled.js';

const DATE_FORMAT = 'DD/MM/YYYY';

const DaySwitch = ({ date, setDate, minDate }) => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const formattedMinDate = dayjs(minDate).format(DATE_FORMAT);
  const toDisablePrevBtn = date === formattedMinDate;

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
    <DaySwitchWrap>
      <button onClick={onOpenCalendar}>
        <span>{date}</span>
        <SvgCustom
          icon="icon-calendar"
          size="20"
          stroke={theme.colors.secondary}
        />
      </button>
      <SwitchWrap>
        <button onClick={toPrevDay} disabled={toDisablePrevBtn}>
          <SvgCustom
            icon="icon-chevron-left"
            size="14"
            stroke={
              !toDisablePrevBtn
                ? theme.colors.white
                : 'rgba(239, 237, 232, 0.2)'
            }
            color={
              !toDisablePrevBtn
                ? theme.colors.white
                : 'rgba(239, 237, 232, 0.2)'
            }
          />
        </button>
        <button onClick={toNextDay}>
          <SvgCustom
            icon="icon-chevron-right"
            size="14"
            stroke={theme.colors.white}
            color={theme.colors.white}
          />
        </button>

        <Calendar
          date={date}
          setDate={setDate}
          minDate={minDate}
          isOpen={isOpenCalendar}
        />
      </SwitchWrap>
    </DaySwitchWrap>
  );
};

export default DaySwitch;

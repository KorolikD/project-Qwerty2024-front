import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { CalendarGlobalStyle, calendarTheme } from './Calendar.styled';
import { useEffect } from 'react';

const DATE_FORMAT = 'DD/MM/YYYY';

const Calendar = ({ date, setDate, minDate, maxDate, isOpen, setIsOpen }) => {
  const formattedMinDate = minDate ? dayjs(minDate).format(DATE_FORMAT) : null;
  const formattedMaxDate = maxDate ? dayjs(maxDate).format(DATE_FORMAT) : null;

  const onChangeDate = (newDate) => {
    const formattedDate = newDate.format(DATE_FORMAT);
    setDate(formattedDate);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }; // перевіряємо чи було натиснуто клавішу Escape

    isOpen && document.addEventListener('keydown', handleKeyDown); // якщо календар відкритий, вішаємо слухач на натискання клавіш

    return () => {
      document.removeEventListener('keydown', handleKeyDown); // видаляємо слухач
    };
  }, [isOpen, setIsOpen]); // логіка закриття календаря по натисканні клавіші Escape

  return (
    <>
      <ConfigProvider theme={calendarTheme}>
        {isOpen && (
          <DatePicker
            allowClear={false}
            format={DATE_FORMAT}
            value={dayjs(date, DATE_FORMAT)}
            defaultValue={dayjs(date, DATE_FORMAT)}
            {...(formattedMaxDate && {
              maxDate: dayjs(formattedMaxDate, DATE_FORMAT),
            })}
            {...(formattedMinDate && {
              minDate: dayjs(formattedMinDate, DATE_FORMAT),
            })}
            onChange={onChangeDate}
            open={isOpen}
          />
        )}
      </ConfigProvider>
      <CalendarGlobalStyle />
    </>
  );
};

export default Calendar;

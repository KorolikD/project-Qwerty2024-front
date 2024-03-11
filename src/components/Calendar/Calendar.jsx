import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { CalendarGlobalStyle, calendarTheme } from './Calendar.styled';
import { useEffect } from 'react';

const DATE_FORMAT = 'DD/MM/YYYY';

const Calendar = ({ date, setDate, minDate, isOpen, setIsOpen }) => {
  const formattedMinDate = dayjs(minDate).format(DATE_FORMAT);

  const onChangeDate = (newDate) => {
    const formattedDate = newDate.format(DATE_FORMAT);
    setDate(formattedDate);
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
            minDate={dayjs(formattedMinDate, DATE_FORMAT)}
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

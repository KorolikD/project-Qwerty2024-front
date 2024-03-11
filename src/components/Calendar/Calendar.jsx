import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { CalendarGlobalStyle, calendarTheme } from './Calendar.styled';
import { useEffect, useRef } from 'react';

const DATE_FORMAT = 'DD/MM/YYYY';

const Calendar = ({ date, setDate, minDate, isOpen, setIsOpen }) => {
  const calendarRef = useRef(null); // створюємо посилання в DOM на календар та передаємо його як пропс ref 
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

    const clickOnBackdrop = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }; // перевіряємо чи є посилання в DOM на календар і чи було клікнуто поза межами цього календаря

    isOpen && document.addEventListener('keydown', handleKeyDown); // якщо календар відкритий, вішаємо слухач на натискання клавіш

    isOpen && document.addEventListener('mousedown', clickOnBackdrop); // якщо календар відкритий - вішаємо слухач на клік мишки

    return () => {
      document.removeEventListener('keydown', handleKeyDown); // видаляємо слухач
      document.removeEventListener('mousedown', clickOnBackdrop); // видаляємо слухач
    };
  }, [isOpen, setIsOpen]); // логіка закриття календаря по натисканні клавіші Escape та по кліку поза межами календаря

  return (
    <>
      <ConfigProvider theme={calendarTheme}>
        {isOpen && (
          <div ref={calendarRef}>
            <DatePicker
              allowClear={false}
              format={DATE_FORMAT}
              value={dayjs(date, DATE_FORMAT)}
              defaultValue={dayjs(date, DATE_FORMAT)}
              minDate={dayjs(formattedMinDate, DATE_FORMAT)}
              onChange={onChangeDate}
              open={isOpen}
            />
          </div>
        )}
      </ConfigProvider>
      <CalendarGlobalStyle />
    </>
  );
};

export default Calendar;

import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { CalendarGlobalStyle, calendarTheme } from './Calendar.styled';

const DATE_FORMAT = 'DD/MM/YYYY';

const Calendar = ({ date, setDate, minDate, isOpen }) => {
  const formattedMinDate = dayjs(minDate).format(DATE_FORMAT);

  const onChangeDate = (newDate) => {
    const formattedDate = newDate.format(DATE_FORMAT);
    setDate(formattedDate);
  };

  return (
    <>
      <ConfigProvider theme={calendarTheme}>
        <DatePicker
          allowClear={false}
          format={DATE_FORMAT}
          value={dayjs(date, DATE_FORMAT)}
          defaultValue={dayjs(date, DATE_FORMAT)}
          minDate={dayjs(formattedMinDate, DATE_FORMAT)}
          onChange={onChangeDate}
          open={isOpen}
        />
      </ConfigProvider>
      <CalendarGlobalStyle />
    </>
  );
};

export default Calendar;

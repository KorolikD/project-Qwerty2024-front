import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { CalendarGlobalStyle } from './Calendar.styled';

const dateFormat = 'DD/MM/YYYY';

const Calendar = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {
              colorText: '#EFEDE8',
              colorBgContainer: 'transperent',
              colorIcon: '#EFEDE8',
              colorBgElevated: '#EF8964',
              colorPrimary: '#040404',
              colorTextHeading: '#EFEDE8',
              cellHoverBg: 'none',
              colorBorder: '#EFEDE8',
              cellWidth: 20,
              cellHeight: 20,
            },
          },
        }}
      >
        <DatePicker
          allowClear={false}
          format={dateFormat}
          defaultValue={dayjs('03-03-2024', dateFormat)}
          minDate={dayjs('01-06-2019', dateFormat)}
          maxDate={dayjs('30-12-2050', dateFormat)}
          // variant="borderless"
        />
      </ConfigProvider>
      <CalendarGlobalStyle />
    </>
  );
};

export default Calendar;

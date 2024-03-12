import TitlePage from '../../components/TitlePage';
import UserForm from '../../components/UserForm';
import UserCard from '../../components/UserCard';
import { useState } from 'react';
import dayjs from 'dayjs';
import Calendar from '../../components/Calendar/index.js';

const DATE_FORMAT = 'DD/MM/YYYY';

const getMaxDate = () => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 18);
  return currentDate;
};
const ProfilePage = () => {
  const [date, setDate] = useState(dayjs().format(DATE_FORMAT));
  const [isOpenCalendar, setIsOpenCalendar] = useState(true);
  console.log(date);
  return (
    <>
      <TitlePage title="Profile Settings" />
      <UserCard />
      <UserForm
        date={date}
        setDate={setDate}
        setIsOpenCalendar={setIsOpenCalendar}
      />
      <Calendar
        date={date}
        setDate={setDate}
        isOpen={isOpenCalendar}
        setIsOpen={setIsOpenCalendar}
        maxDate={getMaxDate()}
      />
    </>
  );
};

export default ProfilePage;

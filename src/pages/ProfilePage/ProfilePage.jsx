import TitlePage from '../../components/TitlePage';
import UserForm from '../../components/UserForm';
import UserCard from '../../components/UserCard';
import { useState } from 'react';
import { selectUser } from '../../redux/auth/authSelectors.js';
import { useSelector } from 'react-redux';
import Calendar from '../../components/Calendar/index.js';

const getMaxDate = () => {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - 18);
  return currentDate;
};
const ProfilePage = () => {
  const user = useSelector(selectUser);
  const [date, setDate] = useState(
    user.birthday ? user.birthday : '00.00.0000'
  );
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  return (
    <>
      <TitlePage title="Profile Settings" />
      <UserCard />
      <UserForm date={date} setIsOpenCalendar={setIsOpenCalendar} />
      <Calendar
        date={date}
        setDate={setDate}
        maxDate={getMaxDate()}
        isOpen={isOpenCalendar}
        setIsOpen={setIsOpenCalendar}
      />
    </>
  );
};

export default ProfilePage;

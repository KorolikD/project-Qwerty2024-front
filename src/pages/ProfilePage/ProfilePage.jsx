import TitlePage from '../../components/TitlePage';
import UserForm from '../../components/UserForm';
import UserCard from '../../components/UserCard';
import LogOutBtn from '../../components/LogOutBtn/LogOutBtn';

const ProfilePage = () => {
  return (
    <>
      <TitlePage title="Profile Settings" />
      <UserCard />
      <LogOutBtn />
      <UserForm />
    </>
  );
};

export default ProfilePage;

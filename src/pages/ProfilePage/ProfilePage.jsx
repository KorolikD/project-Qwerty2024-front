import TitlePage from '../../components/TitlePage';
import UserForm from '../../components/UserForm';
import UserCard from '../../components/UserCard';

const ProfilePage = () => {
  return (
    <>
      <TitlePage title="Profile Settings" />
      <UserCard />
      <UserForm />
    </>
  );
};

export default ProfilePage;

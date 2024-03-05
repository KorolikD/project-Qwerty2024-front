import TitlePage from '../../components/TitlePage';
import UserForm from '../../components/UserForm';
// import UserCard from '../../components/UserCard';
import { } from './ProfilePage.styled';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const userData = useSelector(state => state.auth.user); 
  return (
    <div>
      <TitlePage title="Profile Settings" />
      {/* <UserCard /> */}
      <UserForm userData={userData} /> 
    </div>
  );
};

export default ProfilePage;

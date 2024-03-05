import TitlePage from '../../components/TitlePage';
import UserForm from '../../components/UserForm';
// import LogOutBtn from '../../components/LogOutBtn/LogOutBtn';
// import UserCard from '../../components/UserCard';
import { } from './ProfilePage.styled';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const userData = useSelector(state => state.auth.user); 
  return (
    <div>
        <TitlePage title="Profile Settings" />
        {/* <UserCard /> */}
        {/* <LogOutBtn/> */}
        <UserForm userData={userData} /> 
    </div>
  );
};

export default ProfilePage;

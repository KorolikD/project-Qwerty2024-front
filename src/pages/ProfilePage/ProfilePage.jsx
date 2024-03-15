import TitlePage from '../../components/TitlePage';
import UserForm from '../../components/UserForm';
import UserCard from '../../components/UserCard';
import { Container, Wrap } from './ProfilePage.styled.js';

const ProfilePage = () => {
  return (
    <>
      <Container>
        <TitlePage title="Profile Settings" />
        <Wrap>
          <UserCard />
          <UserForm />
        </Wrap>
      </Container>
    </>
  );
};

export default ProfilePage;

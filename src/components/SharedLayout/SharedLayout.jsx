import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import { Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;

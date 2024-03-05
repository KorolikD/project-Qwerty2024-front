import { Headed, Container, ContainerNav } from './ExercisesPage.styled';
import ExercisesCategories from '../../components/ExercisesCategories';

const ExercisesPage = () => {
  return (
    <div>
      <Container>
        <ContainerNav>
          <Headed>Exercises</Headed>
          <ExercisesCategories></ExercisesCategories>
        </ContainerNav>
      </Container>
    </div>
  );
};

export default ExercisesPage;

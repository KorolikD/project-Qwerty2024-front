import { Headed, Container, ContainerNav } from './ExercisesPage.styled';
import ExercisesCategories from '../../components/ExercisesCategories';
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
const ExercisesPage = () => {
  return (
    <div>
      <Container>
        <ContainerNav>
          <Headed>Exercises</Headed>
          <ExercisesCategories></ExercisesCategories>
          <ExercisesSubcategoriesList />
        </ContainerNav>
      </Container>
    </div>
  );
};

export default ExercisesPage;

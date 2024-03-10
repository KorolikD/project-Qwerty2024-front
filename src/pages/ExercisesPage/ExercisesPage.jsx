import { Headed, Container } from './ExercisesPage.styled';
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';

const ExercisesPage = () => {
  return (
    <Container>
      <Headed>Exercises</Headed>
      <ExercisesCategories />
      <ExercisesSubcategoriesList />
    </Container>
  );
};

export default ExercisesPage;

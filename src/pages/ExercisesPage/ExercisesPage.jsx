import { Container } from './ExercisesPage.styled';
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';

const ExercisesPage = () => {
  return (
    <Container>
      <ExercisesCategories />
      <ExercisesSubcategoriesList />
    </Container>
  );
};

export default ExercisesPage;

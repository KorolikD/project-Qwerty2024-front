import { Headed, Container } from './ExercisesPage.styled';
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import ExercisesList from '../../components/ExercisesList/ExercisesList';
const ExercisesPage = () => {
  return (
    <Container>
      <ExercisesList></ExercisesList>
      <Headed>Exercises</Headed>
      <ExercisesCategories />
      <ExercisesSubcategoriesList />
    </Container>
  );
};

export default ExercisesPage;

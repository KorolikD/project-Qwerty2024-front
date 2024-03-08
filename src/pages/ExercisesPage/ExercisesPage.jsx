import { Headed, Container } from './ExercisesPage.styled';
import ExercisesSubcategoriesList from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import ExercisesItem from '../../components/ExercisesItem/ExercisesItem';
const ExercisesPage = () => {
  return (
    <Container>
      <ExercisesItem></ExercisesItem>
      <Headed>Exercises</Headed>
      <ExercisesCategories />
      <ExercisesSubcategoriesList />
    </Container>
  );
};

export default ExercisesPage;

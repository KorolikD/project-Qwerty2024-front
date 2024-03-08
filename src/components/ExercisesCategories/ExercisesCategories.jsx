import { useState } from 'react';
import {
  CategoryLists,
  CategoryExercisesStyle,
  ExerciseCards,
} from './ExercisesCategories.styled';
import exercisesLink from '../../services/api/exercises';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

const ExercisesCategories = () => {
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async (category) => {
    try {
      const response = await exercisesLink.get(`/exercises?filter=${category}`);
      setExercises(response.data[category]);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <CategoryLists>
        <li>
          <CategoryExercisesStyle onClick={() => fetchExercises('Body parts')}>
            Body parts
          </CategoryExercisesStyle>
        </li>
        <li>
          <CategoryExercisesStyle onClick={() => fetchExercises('Muscles')}>
            Muscles
          </CategoryExercisesStyle>
        </li>
        <li>
          <CategoryExercisesStyle onClick={() => fetchExercises('Equipment')}>
            Equipment
          </CategoryExercisesStyle>
        </li>
      </CategoryLists>
      <ExerciseCards>
        {exercises &&
          exercises.map((exercise) => (
            <ExercisesSubcategoriesItem
              key={exercise._id}
              subcategory={exercise}
            />
          ))}
      </ExerciseCards>
    </div>
  );
};

export default ExercisesCategories;

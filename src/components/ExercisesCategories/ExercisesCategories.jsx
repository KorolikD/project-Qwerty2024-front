import { useState } from 'react';
import axios from 'axios';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import {
  CategoryLists,
  CategoryExercisesStyle,
  ExerciseCards,
} from './ExercisesCategories.styled';

const ExercisesCategories = () => {
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async (category) => {
    try {
      const response = await axios.get(
        `https://project-qwerty2024-back.onrender.com/api/exercises?filter=${category}`,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcwOTc2MzU3OSwiZXhwIjoxNzA5ODQ2Mzc5fQ.LWW3hoO8WkEMJMowiFKe5akGF9MorPWW978hlN0YSQU',
          },
        }
      );
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
      {exercises.length > 0 && (
        <ExerciseCards>
          {exercises.map((exercise) => (
            <ExercisesSubcategoriesItem
              key={exercise._id}
              subcategory={exercise}
            />
          ))}
        </ExerciseCards>
      )}
    </div>
  );
};

export default ExercisesCategories;

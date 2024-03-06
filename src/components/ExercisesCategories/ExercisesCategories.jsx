import React, { useState } from 'react';
import axios from 'axios';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import {
  CategoryLists,
  CategoryExercisesStyle,
  ExerciseCards,
} from './ExercisesCategories.styled';

const ExercisesCategories = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchExercises = async (category) => {
    try {
      const response = await axios.get(
        `https://project-qwerty2024-back.onrender.com/api/exercises?filter=${category}`,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcwOTc0NTkzOSwiZXhwIjoxNzA5ODI4NzM5fQ.sZyVWKJZRsXGu1GpoBKqmeruBZ0Mc22ezRmPAhEL55Y',
          },
        }
      );
      setExercises(response.data[category]);
      setSelectedCategory(category);
    } catch (error) {
      console.error('Error fetching exercises:', error);
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

import { useEffect, useState } from 'react';
import axios from 'axios';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import {
  CategoryLists,
  CategoryExercisesStyle,
  ExerciseCards,
} from './ExercisesCategories.styled';
import ExercisesItem from '../ExercisesItem/ExercisesItem';

export const Categories = {
  'Body parts': 'bodyParts',
  Equipment: 'equipment',
  Muscles: 'target',
};

export const CATEGORIES = {
  'Body parts': 'bodyParts',
  Equipment: 'equipment',
  Muscles: 'target',
};

const ExercisesCategories = () => {
  const [exercises, setExercises] = useState([]);
  // [key, value] для цього апі params?key=equipment&value=barbell
  const [exercisesList, setExercisesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isCategorySelected = selectedCategory !== null;

  const fetchExercises = async (category) => {
    setSelectedCategory(null);
    try {
      const response = await axios.get(
        `https://project-qwerty2024-back.onrender.com/api/exercises?filter=${category}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcxMDAxNDgyNiwiZXhwIjoxNzEwMDk3NjI2fQ.KHNi-Abea7UVqHuhxCFwv-WzSdzHIlPAV2dusZ9uSCc',
          },
        }
      );

      console.log(response, 'response');
      setExercises(response.data[category]);
      // setSelectedCategory(category);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  const fetchExerciseList = async (key, value) => {
    try {
      const response = await axios.get(
        `https://project-qwerty2024-back.onrender.com/api/exercises/params?key=${key}&value=${value}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcxMDAxNDgyNiwiZXhwIjoxNzEwMDk3NjI2fQ.KHNi-Abea7UVqHuhxCFwv-WzSdzHIlPAV2dusZ9uSCc',
          },
        }
      );

      setExercisesList(response.data.exercises);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  useEffect(() => {
    fetchExercises('bodyPart');
  }, []);

  const renderExercisesList = () => {
    if (isCategorySelected) {
      return (
        <div>
          <button
            onClick={() => {
              document.title = 'React App';
              setSelectedCategory(null);
            }}
          >
            back
          </button>
          <ExerciseCards>
            {exercisesList.length > 0
              ? exercisesList.map((exercise) => (
                  <ExercisesItem key={exercise._id} subcategory={exercise} />
                ))
              : 'Empty'}
          </ExerciseCards>
        </div>
      );
    }

    return (
      exercises &&
      exercises.length > 0 && (
        <ExerciseCards>
          {exercises.map((exercise) => (
            <ExercisesSubcategoriesItem
              key={exercise._id}
              subcategory={exercise}
              onSelect={async (key, value) => {
                document.title = key;
                await fetchExerciseList(key, value);
                setSelectedCategory([key, value]);
              }}
            />
          ))}
        </ExerciseCards>
      )
    );
  };

  return (
    <div>
      <CategoryLists>
        <li>
          <CategoryExercisesStyle onClick={() => fetchExercises('bodyPart')}>
            Body parts
          </CategoryExercisesStyle>
        </li>
        <li>
          <CategoryExercisesStyle onClick={() => fetchExercises('equipment')}>
            Equipment
          </CategoryExercisesStyle>
        </li>
        <li>
          <CategoryExercisesStyle onClick={() => fetchExercises('target')}>
            Muscles
          </CategoryExercisesStyle>
        </li>
      </CategoryLists>
      {renderExercisesList()}
    </div>
  );
};

export default ExercisesCategories;

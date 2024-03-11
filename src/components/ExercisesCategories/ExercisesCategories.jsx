import axios from 'axios';
import { useEffect, useState } from 'react';
import CustomExercisesItem from '../ExercisesItem/ExercisesItem';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import {
  CategoryExercisesStyle,
  CategoryLists,
  ExerciseCards,
  BackButton,
  SvgBack,
  ExerciseCardsItem,
  ExercisesSkroll,
} from './ExercisesCategories.styled';
import icons from '../../img/sprite.svg';

export const CATEGORIES = {
  'Body parts': 'bodyPart',
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
      const response = await axios.get(`/exercises?filter=${category}`);

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
        `/exercises/params?key=${key}&value=${value}`
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
          <BackButton
            type="button"
            onClick={() => {
              document.title = 'React App';
              setSelectedCategory(null);
            }}
          >
            <SvgBack width="16" height="16">
              <use href={icons + '#icon-next'} />
            </SvgBack>
            BACK
          </BackButton>

          <ExercisesSkroll style={{ height: '500px' }}>
            <ExerciseCards>
              {exercisesList.length > 0
                ? exercisesList.map((exercise) => (
                    <CustomExercisesItem
                      key={exercise._id}
                      subcategory={exercise}
                    />
                  ))
                : 'Empty'}
            </ExerciseCards>
          </ExercisesSkroll>
        </div>
      );
    }

    return (
      exercises &&
      exercises.length > 0 && (
        <ExerciseCardsItem>
          {exercises.map((exercise) => (
            <ExercisesSubcategoriesItem
              key={exercise._id}
              subcategory={exercise}
              onSelect={async (key, value) => {
                document.title = key;
                await fetchExerciseList(CATEGORIES[key], value);
                setSelectedCategory([key, value]);
              }}
            />
          ))}
        </ExerciseCardsItem>
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

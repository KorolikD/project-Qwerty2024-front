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
  PageTitle,
  NavTitle,
  ExercisesPictures,
} from './ExercisesCategories.styled';
import icons from '../../img/sprite.svg';
import Slider from 'react-slick';
import { slider } from '../../helpers/slider/slider';

const CATEGORIES = {
  'Body parts': 'bodyPart',
  Equipment: 'equipment',
  Muscles: 'target',
};

const ExercisesCategories = () => {
  const [exercises, setExercises] = useState([]);
  const [exercisesList, setExercisesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pageTitle, setPageTitle] = useState('Exercises');

  const isCategorySelected = selectedCategory !== null;

  const fetchExercises = async (category) => {
    setSelectedCategory(null);
    try {
      const response = await axios.get(`/exercises?filter=${category}`);
      setExercises(response.data[category]);
      setPageTitle('Exercises');
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
      setPageTitle(value);
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
              setPageTitle('Exercises');
            }}
          >
            <SvgBack width="16" height="16">
              <use href={icons + '#icon-next'} />
            </SvgBack>
            BACK
          </BackButton>
          <ExercisesPictures>
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
          </ExercisesPictures>
        </div>
      );
    }

    return (
      exercises &&
      exercises.length > 0 && (
        <Slider {...slider}>
          {exercises.map((exercise) => (
            <ExerciseCardsItem key={exercise._id}>
              <ExercisesSubcategoriesItem
                subcategory={exercise}
                onSelect={async (key, value) => {
                  document.title = key;
                  await fetchExerciseList(CATEGORIES[key], value);
                  setSelectedCategory([key, value]);
                }}
              />
            </ExerciseCardsItem>
          ))}
        </Slider>
      )
    );
  };

  return (
    <div>
      <NavTitle>
        <PageTitle>{pageTitle}</PageTitle>
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
      </NavTitle>
      {renderExercisesList()}
    </div>
  );
};

export default ExercisesCategories;

import { useState } from 'react';
import {
  CategoryLists,
  CategoryExercisesStyle,
} from './ExercisesCategories.styled';
import exercisesLink from '../../services/api/exercises';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slider } from '../../helpers/slider/slider';
import { Link } from 'react-router-dom';

const ExercisesCategories = () => {
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async (category, subcategory) => {
    try {
      const response = await exercisesLink.get('/exercises');
      const allExercises = [
        ...response.data.bodyPart,
        ...response.data.equipment,
        ...response.data.target,
      ];

      const filteredExercises = allExercises.filter(
        (exercise) => exercise.filter === subcategory
      );
      setExercises(filteredExercises);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <CategoryLists>
        <li>
          <CategoryExercisesStyle
            onClick={() => fetchExercises('Body parts', 'Body parts')}
          >
            Body parts
          </CategoryExercisesStyle>
        </li>
        <li>
          <CategoryExercisesStyle
            onClick={() => fetchExercises('Muscles', 'Muscles')}
          >
            Muscles
          </CategoryExercisesStyle>
        </li>
        <li>
          <CategoryExercisesStyle
            onClick={() => fetchExercises('Equipment', 'Equipment')}
          >
            Equipment
          </CategoryExercisesStyle>
        </li>
      </CategoryLists>
      <Slider {...slider}>
        {exercises.map((exercise) => (
          <Link
            key={exercise._id}
            to={`/exercises/${exercise.filter}/${exercise.name}`}
          >
            <ExercisesSubcategoriesItem subcategory={exercise} />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ExercisesCategories;

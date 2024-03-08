import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slider } from '../../helpers/slider/slider';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import exercisesLink from '../../services/api/exercises';

const ExercisesSubcategoriesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await exercisesLink.get('/exercises');
        const allExercises = [
          ...response.data.bodyPart,
          ...response.data.equipment,
          ...response.data.target,
        ];
        setExercises(allExercises);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
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
  );
};

export default ExercisesSubcategoriesList;

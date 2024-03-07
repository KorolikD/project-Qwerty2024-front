import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { slider } from '../../helpers/slider/slider';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExercisesSubcategoriesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcwOTgyNDg2MSwiZXhwIjoxNzA5OTA3NjYxfQ.06vBjein3Yw25toON6Mk7M4eNDHYy1F6CkiXJ30kgvM';
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          'https://project-qwerty2024-back.onrender.com/api/exercises',
          config
        );

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

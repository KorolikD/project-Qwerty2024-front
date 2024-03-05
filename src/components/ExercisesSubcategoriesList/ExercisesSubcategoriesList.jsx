import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slider } from '../../pages/ExercisesPage/slider/slider';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

const ExercisesSubcategoriesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTQ1MzkzYmZjNWExMzNmOTExMDZiZCIsImlhdCI6MTcwOTYyODMwOSwiZXhwIjoxNzA5NzExMTA5fQ.EuGaXjrDFsutOL4ZXiYBEIyB8zUoU3JvwSisHFXBiYc';
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
        <ExercisesSubcategoriesItem key={exercise._id} subcategory={exercise} />
      ))}
    </Slider>
  );
};

export default ExercisesSubcategoriesList;

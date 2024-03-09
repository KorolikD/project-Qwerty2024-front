import { useState, useEffect } from 'react';
import axios from 'axios';

const ExercisesSubcategoriesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcxMDAxNDgyNiwiZXhwIjoxNzEwMDk3NjI2fQ.KHNi-Abea7UVqHuhxCFwv-WzSdzHIlPAV2dusZ9uSCc';
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
  return <div></div>;
};

export default ExercisesSubcategoriesList;

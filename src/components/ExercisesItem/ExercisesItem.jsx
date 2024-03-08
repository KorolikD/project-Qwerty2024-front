import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';

const ExercisesItem = () => {
  const [exercises, setExercises] = useState([]);

  const isMobileScreen = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcwOTg2NDk5NiwiZXhwIjoxNzA5OTQ3Nzk2fQ.gkXizanD6dvdudR1dkMsMCaZKXE8w_yJJBc2NYcvrgo';
        const response = await fetch(
          'https://project-qwerty2024-back.onrender.com/api/exercises',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      {Array.isArray(exercises) &&
        exercises.map((exercise) => (
          <ImageListItem
            key={exercise.id}
            style={{ paddingBottom: isMobileScreen ? '20px' : '0' }}
          >
            <div>
              <div>
                <p>WORKOUT</p>
                <button>Start</button>
              </div>
              <div>
                <span></span>
                <p>{exercise.name}</p>
              </div>
              <ul>
                <li>
                  Burned calories: <span>{exercise.burnedCalories}</span>
                </li>
                <li>
                  Body part: <span>{exercise.bodyPart}</span>
                </li>
                <li>
                  Target: <span>{exercise.target}</span>
                </li>
              </ul>
            </div>
          </ImageListItem>
        ))}
    </div>
  );
};

export default ExercisesItem;

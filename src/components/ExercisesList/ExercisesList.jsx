import { useState, useEffect } from 'react';
import ExercisesItem from '../ExercisesItem/ExercisesItem';

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcwOTg5NjIzMywiZXhwIjoxNzA5OTc5MDMzfQ.QiyfBp1CKgKL4YGk6H-if0EjJcGbq9Z8PaSQJqsiMMo';

  useEffect(() => {
    fetch('https://project-qwerty2024-back.onrender.com/api/exercises', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setExercises(data))
      .catch((error) => console.error('Error fetching exercises:', error));
  }, []);

  return (
    <ul>
      {Array.isArray(exercises) &&
        exercises.map((exercise) => (
          <ExercisesItem
            key={exercise.id}
            calories={exercise.calories}
            target={exercise.target}
            NameBodyPart={exercise.bodyPart}
            name={exercise.name}
          />
        ))}
    </ul>
  );
};
export default ExercisesList;

import Background from './Background';
import backgroundImage1x from '../../img/exercises-side-1x.jpg';
import backgroundImage2x from '../../img/exercises-side-2x.jpg';

const ExercisesImg = () => {
  const images = {
    desktop: backgroundImage1x,
    desktop2x: backgroundImage2x,
  };

  return <Background images={images} />;
};

export default ExercisesImg;

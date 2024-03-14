import { useEffect, useState } from 'react';
import { getStatistics } from '../../services/api/statistics';
import {
  VideoTutorialBox,
  CaloriesBox,
  VideoSpan,
  VideoParagraph,
  CalorieCountSpan,
  CalorieNum,
  VideoIconWrapper,
  StyledSVGIcon,
  CalorieIconWrapper,
  CalorieIcon,
} from './DynamicElementBoxes.styled';

const DynamicBox = ({ type }) => {
  useEffect(() => {
    const getData = async () => {
      const statistics = await getStatistics();
      setData(statistics);
    };
    getData();
  }, []);

  const [data, setData] = useState([]);

  const renderBox = () => {
    switch (type) {
      case 'videoTutorial':
        return (
          <VideoTutorialBox>
            <VideoIconWrapper>
              <StyledSVGIcon>
                <use href="src/img/sprite.svg#icon-play"></use>
              </StyledSVGIcon>
            </VideoIconWrapper>
            <VideoSpan>
              {data.videosQuantity}
              <VideoParagraph>Video tutorial</VideoParagraph>
            </VideoSpan>
          </VideoTutorialBox>
        );
      case 'calories':
        return (
          <CaloriesBox>
            <CalorieIconWrapper>
              <CalorieIcon>
                <use href="src/img/sprite.svg#icon-running"></use>
              </CalorieIcon>
            </CalorieIconWrapper>
            <p>
              <CalorieCountSpan>
                {Math.round(data.totalCaloriesBurned)}
                <CalorieNum>cal</CalorieNum>
              </CalorieCountSpan>
            </p>
          </CaloriesBox>
        );
      default:
        return null;
    }
  };

  return renderBox();
};

export default DynamicBox;

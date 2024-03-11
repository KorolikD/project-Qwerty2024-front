import { VideoTutorialBox, CaloriesBox, VideoSpan, VideoParagraph, CalorieCountSpan, CalorieNum, VideoIconWrapper, StyledSVGIcon, CalorieIconWrapper, CalorieIcon } from "./DynamicElementBoxes.styled";


const DynamicBox = ({ type}) => {
    
    const renderBox = () => {
      switch (type) {
        case 'videoTutorial':
          return <VideoTutorialBox><VideoIconWrapper> <StyledSVGIcon>
          <use href='src/img/sprite.svg#icon-play'></use>
        </StyledSVGIcon></VideoIconWrapper><VideoSpan>350+<VideoParagraph>Video tutorial</VideoParagraph></VideoSpan></VideoTutorialBox>;
        case 'calories':
          return <CaloriesBox>
            <CalorieIconWrapper>
<CalorieIcon> <use href='src/img/sprite.svg#icon-running'></use></CalorieIcon>
              </CalorieIconWrapper>
             <p><CalorieCountSpan>500<CalorieNum>cal</CalorieNum></CalorieCountSpan></p></CaloriesBox>;
        default:
          return null; 
      }
    };
  
    return renderBox();
  };

  export default DynamicBox;
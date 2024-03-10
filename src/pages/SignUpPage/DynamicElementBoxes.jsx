import { VideoTutorialBox, CaloriesBox, VideoSpan, VideoParagraph, CalorieCountSpan, CalorieNum } from "./DynamicElementBoxes.styled";


const DynamicBox = ({ type}) => {
    
    const renderBox = () => {
      switch (type) {
        case 'videoTutorial':
          return <VideoTutorialBox><VideoSpan>350+<VideoParagraph>Video tutorial</VideoParagraph></VideoSpan></VideoTutorialBox>;
        case 'calories':
          return <CaloriesBox><CalorieCountSpan>500<CalorieNum>cal</CalorieNum></CalorieCountSpan></CaloriesBox>;
        default:
          return null; 
      }
    };
  
    return renderBox();
  };

  export default DynamicBox;
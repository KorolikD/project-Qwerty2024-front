import { VideoTutorialBox, CaloriesBox } from "./DynamicElementBoxes.styled";

const DynamicBox = ({ type, children, position }) => {
    
    const renderBox = () => {
      switch (type) {
        case 'videoTutorial':
          return <VideoTutorialBox></VideoTutorialBox>;
        case 'calories':
          return <CaloriesBox></CaloriesBox>;
        default:
          return null; 
      }
    };
  
    return renderBox();
  };

  export default DynamicBox;
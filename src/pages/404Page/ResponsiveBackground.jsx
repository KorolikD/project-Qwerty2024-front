import { Background } from "./ErrorPage.styled";

const ResponsiveBackground = ({ images }) => {
    const getImageSrc = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const screenWidth = window.innerWidth;
  
      if (screenWidth >= 1024) {
        return pixelRatio >= 2 ? images.desktop2x : images.desktop;
      } else if (screenWidth >= 768) {
        return pixelRatio >= 2 ? images.tablet2x : images.tablet;
      } else {
        return pixelRatio >= 2 ? images.mobile2x : images.mobile;
      }
    };
  
    const imageSrc = getImageSrc();
  
    return <Background image={imageSrc} />;
  };
  
  export default ResponsiveBackground;
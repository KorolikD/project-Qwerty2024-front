
import { Background } from "./ErrorPage.styled";

const ResponsiveBackground = ({ images }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setImageSrc(pixelRatio >= 2 ? images.desktop2x : images.desktop);
      } else if (screenWidth >= 768) {
        setImageSrc(pixelRatio >= 2 ? images.tablet2x : images.tablet);
      } else {
        setImageSrc(pixelRatio >= 2 ? images.mobile2x : images.mobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, [images]);

  return <Background image={imageSrc} />;
};

export default ResponsiveBackground;

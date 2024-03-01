import { Spin, Spinner } from './Loader.styled';

export const Loader = ({ size = 56 }) => {
  return <Spin indicator={<Spinner style={{ fontSize: size }} spin />} />;
};

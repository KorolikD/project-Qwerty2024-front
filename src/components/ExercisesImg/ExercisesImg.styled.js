import styled from 'styled-components';

export const Backgrounds = styled.div`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;

  top: 241px;
  left: 107px;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.image}),
    linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    linear-gradient(170.48deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%);

  @media (min-width: 768px) {
    top: 131px;
    left: 331px;
  }

  @media (min-width: 1024px) {
    top: -152px;
    left: 770px;
  }
`;

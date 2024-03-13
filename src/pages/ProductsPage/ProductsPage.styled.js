import styled from 'styled-components';
import products1x from '../../img/products-1x.jpg';
import products2x from '../../img/hero-2x.jpg';

export const Wrapper = styled.div`
  padding-bottom: 68px;
  @media screen and (min-width: 1440px) {
    margin-right: -96px;
    background-image: url(${products1x});
    background-repeat: no-repeat;
    background-position: right;
  }
`;

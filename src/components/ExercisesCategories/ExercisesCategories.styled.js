import styled from 'styled-components';

export const CategoryLists = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-top: 0;
  }

  li {
    position: relative;
    cursor: pointer;
    transition:
      color 0.3s ease,
      border-bottom-color 0.3s ease;
    &:hover,
    &:focus {
      color: orange;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 3px;
      border-radius: 3px;
      border-bottom: 3px solid transparent;
      transition: border-bottom-color 0.3s ease;
    }
    &:hover::before,
    &:focus::before {
      border-bottom-color: orange;
    }
  }
`;

export const CategoryExercisesStyle = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;

export const NavTitle = styled.div`
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const PictureCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ExerciseCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
  @media screen and (min-width: 1440px) {
    width: 842px;
  }
`;

export const ExerciseCardsItem = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const BackButton = styled.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.4);
  background: transparent;
  border: none;
  &:hover {
    color: orange;
  }
`;

export const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
  text-transform: capitalize;
  margin-right: 20px;
`;

export const SvgBack = styled.svg`
  transform: rotate(180deg);
  stroke: grey;
  &:hover {
    color: orange;
  }
`;

export const ExercisesSkroll = styled.div`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      #ef8964 0%,
      #ef8964 30%,
      #ef8964 50%,
      #ef8964 70%,
      #ef8964 100%
    );
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    height: 507px;
    gap: 32px 16px;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
`;

import backgroundImage1x from '../../img/exercises-side-1x.jpg';
import backgroundImage2x from '../../img/exercises-side-2x.jpg';

export const ExercisesPictures = styled.div`
  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundImage1x});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

    max-width: 1440px;
    height: 716px;
    margin-right: -96px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundImage2x});
    }
  }
`;

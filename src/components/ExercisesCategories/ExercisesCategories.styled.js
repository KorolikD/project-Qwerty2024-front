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
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
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

  overflow-y: auto;

  @media (min-width: 768px) {
    height: 507px;
    gap: 32px 16px;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
`;

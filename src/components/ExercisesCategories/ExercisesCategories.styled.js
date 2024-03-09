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
`;

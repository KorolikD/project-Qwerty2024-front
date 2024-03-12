import styled from 'styled-components';
import theme from '../../styles/theme';

export const ConteinerForIt = styled.div`
  width: 335px;

  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

export const ExercisesItemWorkout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`;

export const Workout = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #e6533c;
  background-color: transparent;
  border: none;
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;

export const NameFor = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;
  &::first-letter {
    text-transform: uppercase;
  }
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ExList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`;

export const ExItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`;

export const SpanItem = styled.span`
  color: white;
  text-transform: capitalize;
`;

export const SvgStart = styled.svg`
  stroke: #e6533c;
`;

export const SpanRun = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #efa082;
`;

export const SvgRun = styled.svg`
  fill: #efede8;
`;

export const ModalWrapper = styled.div`
  width: 302px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* overflow-y: auto; */
`;

export const TrainingPreview = styled.img`
  width: 270px;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  margin-bottom: 14px;
  border: 1px solid ${theme.colors.modalBorder};
  border-radius: 12px;
`;

export const CaloriesText = styled.p`
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.textWhite30};

  & span {
    color: ${theme.colors.primary};
  }
`;

export const ExerciseModalList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 40px;
  min-width: 302px;
`;

export const ExerciseModalListItem = styled.li`
  height: auto;
  width: 147px;

  border: 1px solid ${theme.colors.modalBorder};
  border-radius: 12px;
  padding: 12px 18px;
`;

export const ModalTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.textWhite40};
`;

export const ModalText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  color: ${theme.colors.white};
  text-transform: capitalize;
`;

export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 150px;
  height: 42px;
  padding: 12px 12px;
  margin-top: 24px;

  background-color: ${theme.colors.primary};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.colors.white};
  text-transform: capitalize;

  border-radius: 12px;
`;

export const StyledButton = styled.button`
  font-size: 0px;
  font-weight: 500;
  line-height: 1.2;
`;

import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* padding: 0 20px; */

  width: 100vw;
  height: 100vh;

  /* background-color: #10100f; */
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: #10100f;

  /* padding: 48px 24px; */

  /* @media screen and (max-width: 374px) {
    min-width: 300px;
    min-height: 362px;
  } */

  /* @media screen and (min-width: 375px) {
    min-width: 335px;
    min-height: 362px;
  } */

  /* @media screen and (min-width: 768px) {
    min-width: 430px;
    min-height: 428px;
    padding: 64px 24px;
  } */
`;

const CloseModalBtn = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  stroke: ${theme.colors.white};

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }

  &:hover,
  &:focus {
    stroke: ${theme.colors.orange};
  }
`;

export { ModalBackdrop, ModalWindow, CloseModalBtn };
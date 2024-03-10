import {
  CloseModalBtn,
  ModalBackdrop,
  ModalWindow,
} from './BasicModalWindow.styled';

const BasicModalWindow = ({ children }) => {
  return (
    <ModalBackdrop>
      <ModalWindow>
        <CloseModalBtn></CloseModalBtn>
        {children}
      </ModalWindow>
    </ModalBackdrop>
  );
};

export default BasicModalWindow;

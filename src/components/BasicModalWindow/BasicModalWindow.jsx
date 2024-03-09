import {
  CloseModalBtn,
  ModalBackdrop,
  ModalWindow,
} from './BasicModalWindow.styled';

const BasicModalWindow = ({ children }) => {


  return (
    <ModalBackdrop>
      <ModalWindow>
        <CloseModalBtn>
        </CloseModalBtn>
      </ModalWindow>
    </ModalBackdrop>
  );
};

export default BasicModalWindow;
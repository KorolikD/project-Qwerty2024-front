// ! _____________________ Додати в компонент картки
// const [modalIsOpen, setIsModalOpen] = useState(false);

// function openModal() {
//   setIsModalOpen(true);
// }

// function closeModal() {
//   setIsModalOpen(false);
// }

//!_____________________ Рендер модального вікна.
// <BasicModalWindow isOpen={modalIsOpen} onRequestClose={closeModal}>
{
  /* Контент */
}
// </BasicModalWindow>;

// ! _____________________ Кнопка відкриття модального вікна
//  <Button onClick={openModal}></Button>

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(18, 20, 23, 0.50)',
    overflow: 'hidden',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// const customStyles = {
//   content: {
//     maxWidth: 'fit-content',
//     maxHeight: 'fit-content',
//     margin: 'auto',
//     overflow: 'auto',
//     inset: 0,
//     border: 'none',
//     background: 'none',
//     padding: 0,
//   },
// };

import Modal from 'react-modal';

import SvgCustom from '../SvgCustom/SvgCustom';
import theme from '../../styles/theme';
import { CloseModalBtn } from './BasicModalWindow.styled';

export const BasicModalWindow = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      style={customStyles}
    >
      <CloseModalBtn type="button" onClick={onRequestClose}>
        <SvgCustom
          icon="icon-cross"
          size="22"
          color={theme.colors.white}
          stroke={theme.colors.white}
          hover={theme.colors.primary}
        />
      </CloseModalBtn>

      {children}
    </Modal>
  );
};

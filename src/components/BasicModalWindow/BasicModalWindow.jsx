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

// const customStyles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(18, 20, 23, 0.50)',
//     overflow: 'hidden',
//   },

//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     margin: 'auto',
//     margin: '20px auto',

//     overflowY: 'auto',

//     marginRight: '-50%',

//     transform: 'translate(-50%, -50%)',
//     padding: '48px 16px',

//     backgroundColor: `${theme.colors.modalBackGround}`,
//     border: `1px solid ${theme.colors.modalBorder}`,
//     borderRadius: '12px',
//     opacity: 1,
//     transition: `opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
//   },
// };

import SvgCustom from '../SvgCustom/SvgCustom';
import theme from '../../styles/theme';
import { CloseModalBtn } from './BasicModalWindow.styled';
import './ant.css';

import { Modal } from 'antd';
export const BasicModalWindow = ({ isOpen, onRequestClose, children }) => {
  return (
    <>
      <Modal
        centered
        open={isOpen}
        closeIcon={false}
        onCancel={onRequestClose}
        footer={null}
        width={'auto'}
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
    </>
  );
};

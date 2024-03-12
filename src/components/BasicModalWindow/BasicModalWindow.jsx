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

import SvgCustom from '../SvgCustom/SvgCustom';
import theme from '../../styles/theme';
import { CloseModalBtn } from './BasicModalWindow.styled';
import './BasicModalWindow.css';

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

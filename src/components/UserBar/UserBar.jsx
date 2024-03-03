import SvgCustom from '../SvgCustom/index.js';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');
const UserBar = () => {
  const [hundlerClick, setHundlerClick] = useState(false);
  return (
    <div>
      <a>
        <SvgCustom svgName="icon-settings" width="24" height="24" color="red" />
        ;
      </a>
      <a>
        <SvgCustom svgNdame="icon-user" width="21" height="21" color="red" />;
      </a>
      <button onClick={() => setHundlerClick((state) => !state)} type="button">
        <SvgCustom svgNdame="icon-user" width="21" height="21" color="red" />
      </button>
      <Modal isOpen={hundlerClick}>
        <h1>Modal</h1>
      </Modal>
    </div>
  );
};

export default UserBar;

import { useState } from 'react';
import s from './ModalStartBalanse.scss';

const ModalStartBalanse = () => {
  const [showModalStartBalanse, setShowModalStartBalanse] = useState(true);

  return (
    <>
      <div
        className={showModalStartBalanse ? s.showText : s.hideShowText}
        onClick={() => setShowModalStartBalanse(true)}
      >
        <p className={s.text}>
          Hello! To get started, enter the current balance of your account!
        </p>
        <p className={s.textNo}> You can't spend money until you have it! </p>
      </div>
    </>
  );
};
export default ModalStartBalanse;

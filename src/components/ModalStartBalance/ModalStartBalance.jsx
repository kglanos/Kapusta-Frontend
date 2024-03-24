import { Title, Modal, Text } from './ModalStartBalance.styled';
import { useState } from 'react';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');
const body = document.querySelector('body');

const ModalBalance = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = () => {
    setIsModalOpen(false);
    body.classList.remove('blueModal');
  };

  const handleClickWindow = e => {
    if (e.currentTarget === e.target) {
      handleModalClose();
    }
  };

  useEffect(() => {
    body.classList.add('blueModal');
    return () => body.classList.remove('blueModal');
  }, []);

  return (
    <>
      {isModalOpen && (
        <Modal onClick={handleClickWindow}>
          <Title>
            Hello! To get started, enter the current balance of your account!
          </Title>
          <Text>You can't spend money until you have it = </Text>
        </Modal>
      )}
    </>
  );
};

export default ModalBalance;

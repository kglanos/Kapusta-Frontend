import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logout } from '../../redux/Auth/operations';
import { useAuth } from 'hook/useAuth';
import {
  HederUserWrapper,
  UserIcon,
  UserWrapper,
  UserEmail,
  ExitButton,
  ExitText,
  ExitIcon,
} from './LogOut.styled';
import exit from '../../icons/arrow-l.svg';
import { ModalConfirm } from '../../components/ModalConfirm';

export function Logout() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <HederUserWrapper>
      <UserWrapper>
        {user.email && (
          <UserIcon>{user.email.toUpperCase().slice(0, 1)}</UserIcon>
        )}
        <UserEmail>{user.email}</UserEmail>
      </UserWrapper>
      <ExitButton>
        <ExitIcon src={exit} alt="Exit" onClick={handleModalOpen} />
        <ExitText type="button" onClick={handleModalOpen}>
          Exit
        </ExitText>
      </ExitButton>
      {modalOpen && (
        <ModalConfirm closeModal={handleModalClose} dispatch={handleLogout}>
          Do you really want to leave?
        </ModalConfirm>
      )}
    </HederUserWrapper>
  );
}

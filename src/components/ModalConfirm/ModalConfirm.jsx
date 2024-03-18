import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  StyledModalWindow,
  StyledContentDiv,
  StyledText,
  StyledDivWithButtons,
  StyledCloseButton,
  StyledModalBackdrop,
} from './ModalConfirm.styled';
import { OrangeButton } from '../Buttons/OrangeButton';
import { WhiteButton } from '../Buttons/WhiteButton';
import close from '../../icons/close.svg';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

export const ModalConfirm = ({ closeModal, dispatch, changeBalance, text }) => {
  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscapeClose = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  }, [closeModal]);

  return createPortal(
    <StyledModalBackdrop
      className="modal-backdrop"
      onClick={handleBackdropClose}
    >
      <StyledModalWindow>
        <StyledCloseButton onClick={closeModal}>
          <img src={close} alt="close" />
        </StyledCloseButton>
        <StyledContentDiv>
          <StyledText>{text ? text : 'Are you sure?'}</StyledText>
          <StyledDivWithButtons>
            <OrangeButton
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
              type="submit"
            >
              {text ? text : 'YES'}
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </StyledDivWithButtons>
        </StyledContentDiv>
      </StyledModalWindow>
    </StyledModalBackdrop>,
    modalRoot
  );
};

ModalConfirm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeBalance: PropTypes.func,
  text: PropTypes.string,
};

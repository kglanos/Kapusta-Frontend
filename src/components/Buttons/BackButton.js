import { useLocation } from 'react-router-dom';
import icons from '../../icons/icons.svg';
import { ButtonBack } from './Buttons.styled';

export const BackButtonComponent = () => {
  const location = useLocation();
  const redirectTo = location.state?.from ?? '/';
  return (
    <ButtonBack to={redirectTo}>
      <svg width="24" height="24">
        <use href={`${icons}#icon-IconBack`}></use>
      </svg>
    </ButtonBack>
  );
};

import { ReactComponent as Logo } from '../../icons/back.svg';
import { Link } from 'react-router-dom';
import { ToTransactionContainer, Text } from './ToTransactionButton.styled';

export const ToTransactionButton = () => {
  return (
    <>
      <Link to="/ścieżka do komponentu expenses">
        <ToTransactionContainer>
          <Logo />
          <Text>TO TRANSACTION</Text>
        </ToTransactionContainer>
      </Link>
    </>
  );
};

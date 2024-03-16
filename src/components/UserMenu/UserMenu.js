import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Auth/operations';
import {
  Container,
  UserArea,
  LogoutButton,
  Avatar,
  Name,
} from './UserMenu.styled';
import { selectUserEmail } from '../../redux/Auth/selectors';

export const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : '';

  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <Container>
      <UserArea>
        <Avatar>{firstLetter}</Avatar> <Name>{userEmail}</Name>
      </UserArea>
      <LogoutButton onClick={handleLogout}>Exit</LogoutButton>
    </Container>
  );
};

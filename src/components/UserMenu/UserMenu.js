import { useScreenSize } from '../../hooks/useScreenSize';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Auth/operations';
import {
  Container,
  UserArea,
  LogoutButton,
  Avatar,
  Name,
  LogoutIcon,
} from './UserMenu.styled';
import logoutSvg from '../../icons/logOut.svg';
import { selectUserEmail } from '../../redux/Auth/selectors';

export const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : '';

  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const { mobileScreen } = useScreenSize();

  return (
    <Container>
      <UserArea>
        {mobileScreen ? (
          <Avatar>{firstLetter}</Avatar>
        ) : (
          <>
            <Avatar>{firstLetter}</Avatar> <Name>{userEmail}</Name>
          </>
        )}
      </UserArea>{' '}
      {mobileScreen ? (
        <>
          <LogoutButton onClick={handleLogout}>
            <LogoutIcon>
              <image href={logoutSvg} />
            </LogoutIcon>
          </LogoutButton>
        </>
      ) : (
        <>
          <LogoutButton onClick={handleLogout}>Exit</LogoutButton>
        </>
      )}
    </Container>
  );
};

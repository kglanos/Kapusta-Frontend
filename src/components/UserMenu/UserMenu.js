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
import { selectUserName } from '../../redux/Auth/selectors';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';

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
            <Avatar>{firstLetter}</Avatar> <Name>{userName}</Name>
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

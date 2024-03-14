import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, LogoSVG } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import logoKapusta from '../../icons/logoKapusta.svg';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const AuthorizedNav = () => {
    return (
      <nav>
        <Link to="/" end>
          <LogoSVG>
            <image href={logoKapusta} />
          </LogoSVG>
        </Link>
        <UserMenu />
      </nav>
    );
  };
  const UnauthorizedNav = () => {
    return (
      <nav>
        <Link to="/" end>
          <LogoSVG>
            <image href={logoKapusta} />
          </LogoSVG>
        </Link>
      </nav>
    );
  };
  return (
    <Container>
      <Header>{isLoggedIn ? <AuthorizedNav /> : <UnauthorizedNav />}</Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;

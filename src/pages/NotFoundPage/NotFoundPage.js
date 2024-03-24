import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ButtonMainPage } from './ButtonMainPage';
import { NotFoundContainer } from './NotFoundPage.styled';
import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';

const NotFound = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Page Error</title>
      </Helmet>
      <ButtonMainPage />
      <NotFoundContainer>Sorry, page not found ! </NotFoundContainer>
      <CabbagesBottom />
    </HelmetProvider>
  );
};

export default NotFound;

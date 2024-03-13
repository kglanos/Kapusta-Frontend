import css from './NotFoundPage.module.css';
import kapusta from '../../images/desktop/kapusta.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const NotFound = () => {
  return (
    <HelmetProvider>
      <div className={css.NotFoundContainer}>
        <Helmet>
          <title>Page Error</title>
        </Helmet>
        Sorry, page not found !{' '}
        <img src={kapusta} alt="kapusta" width="80%" height="30%" />
      </div>
    </HelmetProvider>
  );
};

export default NotFound;

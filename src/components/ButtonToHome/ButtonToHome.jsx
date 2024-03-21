import React from 'react';
import { Link } from 'react-router-dom';
import css from './ButtonToHome.module.scss';
import Back from '../../icons/back.svg';

export const ButtonToHome = () => {
  return (
    <Link to="/expenses">
      <div className={css.ArrowBack}>
        <img src={Back} alt="arrow" />
        <p className={css.ArrowBackDesk}>Main Page</p>
      </div>
    </Link>
  );
};

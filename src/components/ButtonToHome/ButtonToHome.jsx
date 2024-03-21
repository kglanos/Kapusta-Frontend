import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './ButtonToHome.module.scss';
import iconBack from '../../icons/back.svg';

export const ButtonToHome = () => {
  const location = useLocation();
  const redirectTo = location.state?.from ?? '/expenses';
  return (
    <Link to={redirectTo}>
      <div className={css.ArrowBack}>
        <img src={iconBack} alt="arrow" />
        <p className={css.ArrowBackDesk}>Main Page</p>
      </div>
    </Link>
  );
};
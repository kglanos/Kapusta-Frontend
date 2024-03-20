import React from 'react';
import ArrowL from '../../icons/arrow-l.svg';
import ArrowR from '../../icons/arrow-r.svg';
import css from './Date.module.scss';

export const Date = () => {
  return (
    <div className={css.DateSelectWrapper}>
      <h3>Current period:</h3>
      <div className={css.DateSelect}>
        <img src={ArrowL} alt="arrow" />
        <h2>miesiac rok</h2>
        <img src={ArrowR} alt="arrow" />
      </div>
    </div>
  );
};

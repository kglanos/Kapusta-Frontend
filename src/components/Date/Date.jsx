import React, { useState } from 'react';
import ArrowL from '../../icons/arrow-l.svg';
import ArrowR from '../../icons/arrow-r.svg';
import css from './Date.module.scss';
import { format, addMonths, subMonths } from 'date-fns';

export const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <div className={css.DateSelectWrapper}>
      <h3>Current period:</h3>
      <div className={css.DateSelect}>
        <img
          src={ArrowL}
          alt="Previous Month"
          className={css.DateSelectPrev}
          onClick={handlePreviousMonth}
        />
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <img
          src={ArrowR}
          alt="Next Month"
          className={css.DateSelectNext}
          onClick={handleNextMonth}
        />
      </div>
    </div>
  );
};

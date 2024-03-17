import React, { useState, useEffect } from 'react';
import css from './Reports.module.scss';
import Back from '../../icons/back.svg';
import ArrowL from '../../icons/arrow-l.svg';
import ArrowR from '../../icons/arrow-r.svg';
import Vector from '../../icons/Vector 1.png';
import { ReactComponent as Products } from  '../../icons/Group 62.svg';
import { ReactComponent as Alcohol } from '../../icons/cocktail 1.svg';
import { ReactComponent as Entertaiment } from '../../icons/kite 1.svg';
import { ReactComponent as Healt } from '../../icons/hands-holding-heart 1.svg';
import { ReactComponent as Car } from '../../icons/car 1.svg';
import { ReactComponent as Housing } from '../../icons/couch 1.svg';
import { ReactComponent as Technique } from '../../icons/tools 1.svg';
import { ReactComponent as Communication } from '../../icons/invoice 1.svg';
import { ReactComponent as SportsHobbies } from '../../icons/clay 1.svg';
import { ReactComponent as Education } from '../../icons/book 1.svg';
import { ReactComponent as Other } from '../../icons/ufo 1.svg';

export const ReportsPage = () => {
  const [categories, setCategories] = useState([]);
  const [balance] = useState(12000);

  useEffect(() => {
    const categoriesData = [
      { name: 'products', value: 1000, icon: Products },
      { name: 'alcohol', value: 1000, icon: Alcohol },
      { name: 'entertainment', value: 1000, icon: Entertaiment },
      { name: 'health', value: 1000, icon: Healt },
      { name: 'transport', value: 1000, icon: Car },
      { name: 'housing', value: 1000, icon: Housing },
      { name: 'technique', value: 1000, icon: Technique },
      { name: 'communal, communication', value: 1000, icon: Communication },
      { name: 'sports, hobbies', value: 1000, icon: SportsHobbies },
      { name: 'education', value: 1000, icon: Education },
      { name: 'other', value: 1000, icon: Other },
    ];

    const updatedCategories = [...categoriesData];

    setCategories(updatedCategories);
  }, [balance]);

  const totalValue = categories.reduce(
    (acc, category) => acc + category.value,
    0
  );
  // Funkcja do obliczania przychodu
  const calculateIncome = () => {
    const income = balance - totalValue;
    if (income >= 0) {
      return income;
    }
  };

  // Przychód
  const income = calculateIncome();
  return (
    <div className={css.ReportsPageContainer}>
      <div className={css.ReportsBalanceWrapper}>
        <div className={css.ReportsBalanceWrapperTabletDesk}>
          <div className={css.ArrowBack}>
            <img src={Back} alt="arrow" />
            <p className={css.ArrowBackDesk}>Main Page</p>
          </div>
          <div className={css.DateBalanceWrapper}>
            <div className={css.DateSelectWrapper}>
              <h3>Current period:</h3>
              <div className={css.DateSelect}>
                <img src={ArrowL} alt="arrow" />
                <h2>miesiac rok</h2>
                <img src={ArrowR} alt="arrow" />
              </div>
            </div>
            <div className={css.BalanceConfirmWrapperDesk}>
              <div className={css.BalanceWrapper}>
                <h3>Balance:</h3>
                <p className={css.Balance}>
                  <span>{balance}</span>
                  <span>.pln</span>
                </p>
              </div>
              <div className={css.ConfirmWrapper}>
                <h3>Confirm</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={css.BalanceSummaryWrapper}>
          <ul className={css.BalanceSummaryList}>
            <li className={css.BalanceSummaryListItem}>
              <p>Expenses:</p>
              <span className={css.BalanceSummaryExpenses}>
                <span>-</span>
                <span>{totalValue}</span> <span>.pln</span>
              </span>
            </li>
            <li>
              <img src={Vector} className={css.Vector} alt="line" />
            </li>
            <li className={css.BalanceSummaryListItem}>
              <p>Income:</p>
              <span className={css.BalanceSummaryIncome}>
                <span>+</span>
                <span>{income}</span>
                <span>.pln</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.ExpensesWrapper}>
        <div className={css.ExpensesTitle}>
          <img src={ArrowL} alt="arrow" />
          <h2>Expenses</h2>
          <img src={ArrowR} alt="arrow" />
        </div>
        <div className={css.Categories}>
          <ul className={css.CategoriesList}>
            {categories.map((category, index) => (
              <li key={index} className={css.CategoriesListItem}>
                <p>{category.value}</p>
                <category.icon className={css.CategoriesListIcon}/>
                {/* <img
                  src={category.icon}
                  className={css.CategoriesListIcon}
                  alt="icon"
                /> */}
                <p>{category.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

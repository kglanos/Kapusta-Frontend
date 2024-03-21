import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  StyledNavMobile,
  StyledNavDesktop,
} from './TransactionCategoryNav.styled';

export const TransactionNavMobile = () => {
  return (
    <StyledNavMobile>
      <Link to="/expenses" className="NavMobile">
        expenses
      </Link>
      <Link to="/income" className="NavMobile">
        income
      </Link>
    </StyledNavMobile>
  );
};

export const TransactionNavDesktop = () => {
  return (
    <StyledNavDesktop>
      <NavLink to="expenses" className="NavDesktop">
        expenses
      </NavLink>
      <NavLink to="income" className="NavDesktop">
        income
      </NavLink>
    </StyledNavDesktop>
  );
};

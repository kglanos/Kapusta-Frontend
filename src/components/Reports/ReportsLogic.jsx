import { useState, useEffect } from 'react';
import { ReactComponent as Products } from '../../icons/Group 62.svg';
import { ReactComponent as Alcohol } from '../../icons/cocktail 1.svg';
import { ReactComponent as Entertaiment } from '../../icons/kite 1.svg';
import { ReactComponent as Health } from '../../icons/hands-holding-heart 1.svg';
import { ReactComponent as Car } from '../../icons/car 1.svg';
import { ReactComponent as Housing } from '../../icons/couch 1.svg';
import { ReactComponent as Technique } from '../../icons/tools 1.svg';
import { ReactComponent as Communication } from '../../icons/invoice 1.svg';
import { ReactComponent as SportsHobbies } from '../../icons/clay 1.svg';
import { ReactComponent as Education } from '../../icons/book 1.svg';
import { ReactComponent as Other } from '../../icons/ufo 1.svg';

export const ReportsLogic = () => {
  const [categories, setCategories] = useState([]);
  const [balance] = useState(10000);
  const [currency] = useState('.usd');

  useEffect(() => {
    const categoriesData = [
      { name: 'Products', value: 1000, icon: Products },
      { name: 'Alcohol', value: 1000, icon: Alcohol },
      { name: 'Entertainment', value: 1000, icon: Entertaiment },
      { name: 'Health', value: 1000, icon: Health },
      { name: 'Transport', value: 1000, icon: Car },
      { name: 'Housing', value: 1000, icon: Housing },
      { name: 'Technique', value: 1000, icon: Technique },
      { name: 'Communal, Communication', value: 1000, icon: Communication },
      { name: 'Sports, Hobbies', value: 1000, icon: SportsHobbies },
      { name: 'Education', value: 1000, icon: Education },
      { name: 'Other', value: 1000, icon: Other },
    ];

    setCategories(categoriesData);
  }, [balance]);

  const totalValue = categories.reduce(
    (acc, category) => acc + category.value,
    0
  );

  const calculateIncome = () => {
    const income = balance - totalValue;
    return income;
  };

  const income = calculateIncome();

  return {
    categories,
    balance,
    totalValue,
    income,
    currency,
  };
};

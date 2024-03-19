import React from 'react';
import { categoriesData } from './CategoriesData';
import { Bar } from 'react-chartjs-2';
import styles from './CategoriesData.module.scss';

export const ReportsChart = () => {
  const chartData = {
    labels: categoriesData.map(category => category.name),
    datasets: [
      {
        label: 'Value',
        backgroundColor: '#ff751d',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: categoriesData.map(category =>
          category.items.reduce((total, item) => total + item.value, 0)
        ),
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
           <Bar
        data={chartData}
        options={{
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
      <ul className={styles.legend}>
        {' '}
        {/* Użyj klasy z modułu CSS */}
        <li className={styles.legendItem}>
          {' '}
          {/* Użyj klasy z modułu CSS */}
          <span
            className={styles.legendColor}
            style={{ backgroundColor: 'rgba(75,192,192,1)' }}
          ></span>{' '}
          {/* Użyj klasy z modułu CSS */}
          <span>Value</span>
        </li>
      </ul>
    </div>
  );
};
//  #ff751d
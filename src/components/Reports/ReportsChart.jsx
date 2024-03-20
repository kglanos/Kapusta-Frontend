import React from 'react';
import { categoriesData } from './CategoriesData';
import { Bar } from 'react-chartjs-2';
import styles from './ReportsChart.module.scss';

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
          scales: {
            x: {
              type: 'category',
            },
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
      <ul className={styles.legend}>
        <li className={styles.legendItem}>
          <span
            className={styles.legendColor}
            style={{ backgroundColor: 'rgba(75,192,192,1)' }}
          ></span>
          <span>Value</span>
        </li>
      </ul>
    </div>
  );
};

//  #ff751d
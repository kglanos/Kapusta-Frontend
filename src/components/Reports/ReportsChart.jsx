import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Importujemy CategoryScale z chart.js
// import { Chart as ChartJS } from 'chart.js/auto';
import { categoriesData } from './CategoriesData';
import css from './ReportsChart.module.scss';

export const ReportsChart = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getDataForCategory = category => {
    const items = category.items.map(item => item.name);
    const values = category.items.map(item => item.value);
    return {
      labels: items,
      datasets: [
        {
          label: category.name,
          backgroundColor: '#ffdac0',
          borderColor: '#ff751d',
          borderWidth: 2,
          borderRadius: 10,
          data: values,
        },
      ],
    };
  };

  const handleCategoryClick = categoryName => {
    setSelectedCategory(
      categoryName === selectedCategory ? null : categoryName
    );
  };

  return (
    <div className={css.chartContainer}>
      <div className={css.Categories}>
        <ul className={css.CategoriesList}>
          {categoriesData.map(
            (category, index) =>
              category.value !== 0 && (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(category.name)}
                  className={css.CategoriesListItem}
                >
                  <p>{category.value}</p>
                  <category.icon className={css.CategoriesListIcon} />
                  <p>{category.name}</p>
                </li>
              )
          )}
          <li className={css.LineBottom}></li>
        </ul>
      </div>

      {categoriesData.map((category, index) => (
        <div key={index}>
          {selectedCategory === category.name && (
            <Bar
              data={getDataForCategory(category)}
              options={{
                scales: {
                  x: {
                    stacked: true,
                    gridLines: {
                      drawBorder: false,
                      display: false,
                    },
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 13,
                    },
                  },
                  y: {
                    stacked: true,
                    gridLines: {
                      color: '#ff751d',
                      drawBorder: false,
                    },
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                },
                title: {
                  display: true,
                  text: `Items for ${category.name}`,
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'top',
                },
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

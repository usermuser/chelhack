import * as React from 'react';
import { NavigationItem } from '../UI/NavigationItem';
import styles from './Navigation.scss';

interface INavigationProps {
  categories: string[];
}

export const Navigation: React.FC<INavigationProps> = ({ categories }) => {
  console.log(categories);

  return (
    <div className={styles['container']}>
      {categories.map((category, id) => (
        <NavigationItem 
          key={id}
          content={category}
        />
      ))}
    </div>
  );
}

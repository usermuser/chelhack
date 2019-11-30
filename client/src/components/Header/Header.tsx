import * as React from 'react';
import { Navigation } from '../Navigation';
import styles from './Header.scss';

interface IHeaderProps {
  categories: string[];
}

export const Header: React.FC<IHeaderProps> = ({ categories }) => {
  return (
    <div className={styles['container']}>
      {/* <IconLogo className={styles['icon-logo']} /> */}
      <Navigation categories={categories} />
    </div>
  )
}
import * as React from 'react';
import styles from './MainTitle.scss';

interface IMainTitleProps {
  title: string;
}

export const MainTitle: React.FC<IMainTitleProps> = ({ title }) => {
  return (
    <div className={styles['container']}>
      {title}
    </div>
  )
}
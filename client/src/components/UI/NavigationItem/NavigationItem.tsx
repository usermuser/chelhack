import * as React from 'react';
import styles from './NavigationItem.scss';

interface INavigationItemProps {
  content: string;
}

export const NavigationItem: React.FC<INavigationItemProps> = ({ content }) => {
  return (
    <div className={styles['container']}>
      {content}
    </div>
  )
}
import * as React from 'react'
import styles from './MainContentWrapper.scss';

export const MainContentWrapper: React.FC = ({ children }) => {
  return (
    <div className={styles['container']}>
      {children}
    </div>
  )
}
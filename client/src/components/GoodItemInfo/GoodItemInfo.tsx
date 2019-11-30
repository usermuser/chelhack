import * as React from 'react';
import { TActiveModalState } from '../../types/redux';
import styles from './GoodItemInfo.scss';

interface IGoodItemInfoProps extends TActiveModalState {}

export const GoodItemInfo: React.FC<IGoodItemInfoProps> = ({ title, parameters, imageUrl }) => {
  

  return (
    <div className={styles['container']}>

    </div>
  )
}
import * as React from 'react';
import styles from './GoodsItem.scss';

export interface IGoodsItemProps {
  title: string;
  brandName: string;
  price: number;
  finalPrice: number;
  imgSrc: string;
}

export const GoodsItem: React.FC<IGoodsItemProps> = ({title, brandName, price, finalPrice, imgSrc}) => {
  return (
    <div className={styles['container']}>
      <img src={imgSrc} alt={imgSrc}></img>
      <div className={styles['info']}>
        <div className={styles['info-title']}>{title}</div>
        <div className={styles['brand-name']}>{brandName}</div>
        <div className={styles['final-price']}>{finalPrice}</div>
        <div className={styles['price']}>{price}</div>
      </div>
    </div>
  );
};

import * as React from 'react';
import styles from './GoodsItem.scss';
import { IconCart } from '../../Icons/IconCart';
import { IGoodParameter } from '../../../types/Goods';

export interface IGoodsItemProps {
  title: string;
  brandName: string;
  price: number;
  finalPrice: number;
  imgSrc: string;
  parameters: IGoodParameter[];
}

export const GoodsItem: React.FC<IGoodsItemProps> = ({ title, brandName, price, finalPrice, imgSrc, parameters }) => {
  

  return (
    <div
      // onClick={}
      className={styles['container']}
    >
      <img src={imgSrc} alt={imgSrc}></img>
      <div className={styles['info']}>
        <div className={styles['info-title']}>{title}</div>
        <div className={styles['brand-name']}>{brandName}</div>
        <div className={styles['final-price']}>{finalPrice}{' Р'}</div>
        <div className={styles['price']}>{price}{' P'}</div>
        <div className={styles['icon-container']}>
          <IconCart className={styles['icon-cart']}/>
        </div>
      </div>
    </div>
  );
};

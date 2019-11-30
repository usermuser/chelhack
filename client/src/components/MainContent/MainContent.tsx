import * as React from 'react';
import { MainTitle } from '../MainTitle';
import { GoodsListContainer } from '../../containers/goodsList';
import styles from './Maincontent.scss';

export const MainContent: React.FC = () => {
return (
    <div className={styles['container']}>
      <MainTitle title={'Наши товары'}/>
      <GoodsListContainer />
    </div>
  );
}
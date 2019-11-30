import * as React from 'react';
import { MainContent } from '../MainContent';
import { MainContentWrapper } from '../UI/MainContentWrapper';
import { HeaderContainer } from '../../containers/header/headerContainer';
import styles from './Application.scss';

export const Application: React.FC = () => {
  return (
    <div className={styles['container']}>
      <HeaderContainer />
      <MainContentWrapper>
        <MainContent />
      </MainContentWrapper>
    </div>
  );
}

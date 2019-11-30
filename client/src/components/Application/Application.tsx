import * as React from 'react';
import styles from './Application.scss';

interface IApplicationProps {
  greeting: string;
}

export const Application: React.FC<IApplicationProps> = ({ greeting }) => {
  return <div className={styles.container}>{greeting}</div>;
}
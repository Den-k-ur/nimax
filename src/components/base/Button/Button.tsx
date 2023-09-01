import React, { FC } from 'react';

import styles from './Button.module.scss';

export type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

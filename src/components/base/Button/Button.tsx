import React, { FC } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {title}
    </button>
  );
};

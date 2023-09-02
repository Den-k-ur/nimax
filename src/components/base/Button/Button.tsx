import React, { FC } from 'react';

import styles from './Button.module.scss';

export type ButtonProps = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({ title, onClick, disabled }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled !== undefined && disabled}
    >
      {title}
    </button>
  );
};

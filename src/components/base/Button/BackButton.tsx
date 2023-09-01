import React, { FC } from 'react';
import { ButtonProps } from './Button';

import styles from './Button.module.scss';

export const BackButton: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className={styles.backButton} onClick={onClick}>
      {title}
    </button>
  );
};

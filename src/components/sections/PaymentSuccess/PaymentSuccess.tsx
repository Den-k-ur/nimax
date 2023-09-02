import React, { FC } from 'react';

import { ReactComponent as SuccessIcon } from './icons/success.svg';

import styles from './PaymentSuccess.module.scss';
import { Button } from 'src/components/base/Button';

type PaymentSuccessProps = {
  title: string;
  onClick?: () => void;
};

export const PaymentSuccess: FC<PaymentSuccessProps> = ({ title, onClick }) => {
  return (
    <div className={styles.successContainer}>
      <div className={styles.successBlock}>
        <SuccessIcon />
        <p>{title}</p>
        <div className={styles.buttonDisplay}>
          <Button title="Забронировать еще" onClick={onClick} />
        </div>
      </div>
      <div className={styles.adaptiveButtonDisplay}>
        <Button title="Забронировать еще" onClick={onClick} />
      </div>
    </div>
  );
};

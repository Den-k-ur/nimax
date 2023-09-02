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
    <div className={styles.successBlock}>
      <SuccessIcon />
      <p>{title}</p>
      <Button title="Забронировать еще" onClick={onClick} />
    </div>
  );
};

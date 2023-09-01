import React, { ChangeEvent, FC } from 'react';
import ReactInputMask from 'react-input-mask';

import styles from './Input.module.scss';

type PhoneNumberInputProps = {
  mask: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
};

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  mask,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <ReactInputMask
      className={styles.input}
      mask={mask}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

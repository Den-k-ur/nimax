import React, { ChangeEvent, FC } from 'react';

import styles from './Input.module.scss';

type InputProps = {
  type: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  value?: string | number;
  checked?: boolean;
  name?: string;
  id?: string;
};

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  min,
  max,
  value,
  id,
  name,
  checked,
}) => {
  return type === 'number' ? (
    <input
      type="number"
      className={styles.Input}
      onChange={onChange}
      min={min}
      max={max}
      value={value}
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.Input}
      onChange={onChange}
      id={id}
      checked={checked}
      name={name}
    />
  );
};

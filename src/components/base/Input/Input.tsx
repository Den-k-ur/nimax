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
  require?: boolean;
  pattern?: string;
};

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  min,
  max,
  pattern,
  value,
  require,
  id,
  name,
  checked,
}) => {
  return type === 'number' ? (
    <input
      type="number"
      className={styles.input}
      onChange={onChange}
      required={require}
      min={min}
      max={max}
      value={value}
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
      required={require}
      id={id}
      value={value}
      checked={checked}
      pattern={pattern}
      name={name}
    />
  );
};

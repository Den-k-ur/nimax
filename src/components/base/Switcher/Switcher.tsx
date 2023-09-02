import React, { ChangeEvent, FC } from 'react';

import styles from './Switcher.module.scss';

type SwitcherProps = {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Switcher: FC<SwitcherProps> = ({ label, checked, onChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.toggleSwitch}>
        <input
          type="checkbox"
          className={styles.checkbox}
          name={label}
          id={label}
          onChange={onChange}
          checked={checked}
        />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
    </div>
  );
};

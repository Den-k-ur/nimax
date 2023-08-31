import React, { FC, ReactElement } from 'react';

import styles from './FormWrapper.module.scss';

type FormWrapperType = {
  children: ReactElement | ReactElement[];
};

export const FormWrapper: FC<FormWrapperType> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

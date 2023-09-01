import React, { ChangeEvent, FC } from 'react';
import { formProps } from 'src/components/pages/MainPage/MainPage';
import { CUSTOMER_DATA_FORM_FIELDS } from './constants';
import { FormWrapper } from 'src/components/base/FormWrapper';
import { Input, PhoneNumberInput } from 'src/components/base/Input';
import ReactInputMask from 'react-input-mask';

import styles from './CustomerData.module.scss';

export const CustomerData: FC<formProps> = ({ formData, setFormData }) => {
  const handleInputChange = (fieldName: string, value: string) => {
    const textValue = value;
    setFormData({ ...formData, [fieldName]: textValue });
  };

  return (
    <div className={styles.formContainer}>
      {CUSTOMER_DATA_FORM_FIELDS.map((field) => (
        <FormWrapper key={field.fieldName}>
          <span className={styles.textStyles}>{field.label}</span>
          <>
            {field.type === 'text' && (
              <div className={styles.inputsStyles}>
                <Input
                  type="text"
                  require={field.fieldName !== 'surname'}
                  value={formData[field.fieldName] as string}
                  placeholder={field.placeholder}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleInputChange(field.fieldName, e.target.value);
                  }}
                />
              </div>
            )}
            {field.type === 'tel' && (
              <div className={styles.inputsStyles}>
                <PhoneNumberInput
                  mask="+7 999 999 99-99"
                  placeholder={field.placeholder}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(field.fieldName, e.target.value)
                  }
                />
              </div>
            )}
            {field.type === 'date' && (
              <div className={styles.inputsStyles}>
                <Input
                  type="date"
                  require
                  value={formData[field.fieldName] as string}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleInputChange(field.fieldName, e.target.value);
                  }}
                />
              </div>
            )}
          </>
        </FormWrapper>
      ))}
    </div>
  );
};

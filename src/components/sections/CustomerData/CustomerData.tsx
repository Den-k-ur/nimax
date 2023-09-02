import React, { ChangeEvent, FC, useState } from 'react';
import { formProps } from 'src/components/pages/MainPage/MainPage';
import { CUSTOMER_DATA_FORM_FIELDS } from './constants';
import { FormWrapper } from 'src/components/base/FormWrapper';
import { Input, PhoneNumberInput } from 'src/components/base/Input';

import styles from './CustomerData.module.scss';

export const CustomerData: FC<formProps> = ({ formData, setFormData }) => {
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (fieldName: string, value: string) => {
    const isRequiredField = CUSTOMER_DATA_FORM_FIELDS.find((field) => field.fieldName === fieldName)
      ?.require;

    if (isRequiredField && !value) {
      setFieldErrors({ ...fieldErrors, [fieldName]: 'Это поле обязательно для заполнения' });
    } else {
      // Если поле не обязательное или заполнено, удаляем ошибку валидации
      const newFieldErrors = { ...fieldErrors };
      delete newFieldErrors[fieldName];
      setFieldErrors(newFieldErrors);
    }

    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <>
      {CUSTOMER_DATA_FORM_FIELDS.map((field) => (
        <FormWrapper key={field.fieldName}>
          <span className={styles.textStyles}>{field.label}</span>
          <>
            <div className={styles.inputsStyles}>
              {field.type === 'text' && (
                <div>
                  <Input
                    type="text"
                    require={field.require}
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
                    require
                    value={formData[field.fieldName] as string}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      handleInputChange(field.fieldName, e.target.value);
                    }}
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
              {fieldErrors[field.fieldName] && (
                <span className={styles.errorText}>{fieldErrors[field.fieldName]}</span>
              )}
            </div>
          </>
        </FormWrapper>
      ))}
    </>
  );
};

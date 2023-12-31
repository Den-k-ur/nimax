import React, { FC, ChangeEvent } from 'react';
import { FormWrapper } from 'src/components/base/FormWrapper';

import styles from './CalculatePage.module.scss';
import { formProps } from 'src/components/pages/MainPage/MainPage';
import { Input } from 'src/components/base/Input';
import { FORM_FIELDS, ROOM_TYPES } from './constants';
import { Switcher } from 'src/components/base/Switcher';

export const CalculatePricePageContent: FC<formProps> = ({ formData, setFormData }) => {
  const handleInputChange = (fieldName: string, value: string) => {
    const numericValue = Number(value);
    const fieldInfo = FORM_FIELDS.find((field) => field.fieldName === fieldName);
    if (fieldInfo && !isNaN(numericValue) && (fieldInfo?.min ?? 0) <= numericValue) {
      setFormData({ ...formData, [fieldName]: numericValue });
    }
  };

  const handleRadioChange = (
    fieldName: string,
    value: string,
    roomPrice: number,
    label: string,
  ) => {
    setFormData({ ...formData, [fieldName]: value, roomPrice, roomTypeLabel: label });
  };

  const handleCheckboxChange = (fieldName: string, checked: boolean) => {
    setFormData({ ...formData, [fieldName]: checked });
  };

  return (
    <>
      {FORM_FIELDS.map((field) => (
        <FormWrapper key={field.fieldName}>
          <span className={styles.textStyles}>{field.label}</span>
          <>
            {field.type === 'number' && (
              <div className={styles.inputsStyles}>
                <Input
                  type="number"
                  min={field.min}
                  max={field.max}
                  value={formData[field.fieldName] as string}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleInputChange(field.fieldName, e.target.value);
                  }}
                />
              </div>
            )}
            {field.type === 'radio' && (
              <div className={styles.radioFormContainer}>
                <div className={styles.selectDisplay}>
                  <select
                    name="roomType"
                    id="roomType"
                    value={formData.roomType}
                    className={styles.selectStyles}
                    onChange={(e) => {
                      handleRadioChange(
                        field.fieldName,
                        e.target.value,
                        ROOM_TYPES[e.target.value].roomPrice,
                        field.label,
                      );
                    }}
                  >
                    {Object.keys(ROOM_TYPES).map((type) => (
                      <option value={type} key={type}>
                        {ROOM_TYPES[type].label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.displayAdaptive}>
                  {Object.keys(ROOM_TYPES).map((type) => (
                    <div key={type} className={styles.radioButtons}>
                      <input
                        type="radio"
                        id={type}
                        name="roomType"
                        value={type}
                        checked={formData.roomType === type}
                        onChange={() => {
                          handleRadioChange(
                            field.fieldName,
                            type,
                            ROOM_TYPES[type].roomPrice,
                            field.label,
                          );
                        }}
                      />
                      <label htmlFor={type}>{ROOM_TYPES[type].label}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {field.type === 'checkbox' && (
              <div className={styles.inputsStyles}>
                <Switcher
                  label={field.label}
                  checked={formData[field.fieldName] as boolean}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    handleCheckboxChange(field.fieldName, e.target.checked);
                  }}
                />
                <div className={styles.displayAdaptive}>
                  <input
                    type="checkbox"
                    checked={formData[field.fieldName] as boolean}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      handleCheckboxChange(field.fieldName, e.target.checked);
                    }}
                  />
                </div>
              </div>
            )}
          </>
        </FormWrapper>
      ))}
      <FormWrapper>
        <span className={styles.textStyles}>Итого:</span>
        <span className={styles.textStyles}>{formData.totalPrice} &#8381;</span>
      </FormWrapper>
    </>
  );
};

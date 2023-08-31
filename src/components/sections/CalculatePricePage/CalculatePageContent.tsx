import React, { FC } from 'react';
import { FormWrapper } from 'src/components/base/FormWrapper';

import styles from './CalculatePage.module.scss';

export const CalculatePricePageContent: FC = () => {
  return (
    <div>
      <FormWrapper>
        <p>Количество взрослых</p>
        <input type="number" min={1} defaultValue={1} />
      </FormWrapper>
      <FormWrapper>
        <p>Количество детей от 5 до 12 лет</p>
        <input type="number" min={0} defaultValue={0} />
      </FormWrapper>
      <FormWrapper>
        <p>Количество детей до 5 лет</p>
        <input type="number" min={0} max={3} defaultValue={0} />
      </FormWrapper>
      <FormWrapper>
        <p>Тип номера</p>
        <div className={styles.radioFormContainer}>
          <div>
            <input type="radio" id="econom" name="roomType" value="econom" />
            <label htmlFor="econom">Эконом</label>
          </div>
          <div>
            <input type="radio" id="standart" name="roomType" value="standart" />
            <label htmlFor="standart">Стандарт</label>
          </div>
          <div>
            <input type="radio" id="lux" name="roomType" value="lux" />
            <label htmlFor="lux">Люкс</label>
          </div>
        </div>
      </FormWrapper>
      <FormWrapper>
        <p>Количество ночей</p>
        <input type="number" min={1} defaultValue={1} />
      </FormWrapper>
      <FormWrapper>
        <p>Страховка</p>
        <input type="checkbox" />
      </FormWrapper>
      <FormWrapper>
        <p>Итого:</p>
      </FormWrapper>
    </div>
  );
};

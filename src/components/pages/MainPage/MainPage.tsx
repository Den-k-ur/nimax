import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import styles from './MainPage.module.scss';
import { CalculatePricePageContent } from 'src/components/sections/CalculatePricePage';
import { FormsDataDTO } from 'src/models/formsData.dto';
import { Button } from 'src/components/base/Button';

export type formProps = {
  formData: FormsDataDTO;
  setFormData: Dispatch<SetStateAction<FormsDataDTO>>;
};
export const MainPage: FC = () => {
  const [page, setPage] = useState(0);
  const [formsData, setFormsData] = useState({
    numberOfAdults: 1,
    numberOfSchoolKids: 0,
    numberOfKids: 0,
    roomType: 'econom',
    numberOfNights: 1,
    roomPrice: 1800,
    insurance: false,
    totalPrice: 1800,
    secondName: '',
    name: '',
    surname: '',
    phoneNumber: '',
    dateOfBirthday: '',
  });

  const calucateTotalPrice = useMemo(() => {
    if (formsData.numberOfSchoolKids !== 0)
      return (
        formsData.numberOfNights *
        (formsData.roomPrice * formsData.numberOfAdults +
          (formsData.roomPrice * formsData.numberOfSchoolKids) / 2)
      );
    else {
      return formsData.numberOfNights * (formsData.roomPrice * formsData.numberOfAdults);
    }
  }, [
    formsData.numberOfAdults,
    formsData.roomPrice,
    formsData.numberOfSchoolKids,
    formsData.numberOfNights,
    formsData.insurance,
  ]);

  useEffect(() => {
    setFormsData({
      ...formsData,
      totalPrice: formsData.insurance
        ? calucateTotalPrice + (calucateTotalPrice / 100) * 10
        : calucateTotalPrice,
    });
  }, [
    formsData.numberOfAdults,
    formsData.roomPrice,
    formsData.numberOfSchoolKids,
    formsData.numberOfNights,
    formsData.insurance,
  ]);

  const displayPage = useMemo(() => {
    switch (page) {
      case 0:
        return <CalculatePricePageContent formData={formsData} setFormData={setFormsData} />;
    }
  }, [page, formsData]);

  const FormTitles = ['Расчет стоимости', 'Данные покупателя', 'Подтверждение заказа'];

  return (
    <div className={styles.page}>
      <div className={styles.pageContainer}>
        <h1>Бронирование номера</h1>
        <p>{FormTitles[page]}</p>
        <div>{displayPage}</div>
        <div className={styles.buttonContainer}>
          <Button title="Далее" onClick={() => setPage(page + 1)} />
        </div>
      </div>
    </div>
  );
};

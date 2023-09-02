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
import { ConfirmationOrderDataDTO, FormsDataDTO } from 'src/models/formsData.dto';
import { Button } from 'src/components/base/Button';
import { CustomerData } from 'src/components/sections/CustomerData';
import { BackButton } from 'src/components/base/Button/BackButton';
import { ConfirmationOrder } from 'src/components/sections/ConfirmationOrder';
import { error } from 'console';
import { PaymentSuccess } from 'src/components/sections/PaymentSuccess';

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
    roomTypeLabel: 'Эконом',
    numberOfNights: 1,
    roomPrice: 1800,
    insurance: false,
    totalPrice: 1800,
    secondName: '',
    name: '',
    surname: '',
    phoneNumber: '+7',
    dateOfBirthday: '',
  });
  const initialFormsData = {
    numberOfAdults: 1,
    numberOfSchoolKids: 0,
    numberOfKids: 0,
    roomType: 'econom',
    roomTypeLabel: 'Эконом',
    numberOfNights: 1,
    roomPrice: 1800,
    insurance: false,
    totalPrice: 1800,
    secondName: '',
    name: '',
    surname: '',
    phoneNumber: '+7',
    dateOfBirthday: '',
  };
  const [isSending, setIsSending] = useState(false);
  const [serverResponse, setServerResponse] = useState<{ message: string } | null>(null);

  const confirmationOrderData = {
    numberOfAdults: formsData.numberOfAdults,
    numberOfSchoolKids: formsData.numberOfSchoolKids,
    numberOfKids: formsData.numberOfKids,
    numberOfNights: formsData.numberOfNights,
    roomType: formsData.roomTypeLabel,
    insurance: formsData.insurance,
    totalPrice: formsData.totalPrice,
    secondName: formsData.secondName,
    name: formsData.name,
    surname: formsData.surname,
    phoneNumber: formsData.phoneNumber,
  };

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

  const simulateServerRequest = useCallback((data: ConfirmationOrderDataDTO) => {
    return new Promise<{ message: string }>((resolve) => {
      setTimeout(() => {
        const response = { message: 'Заказ успешно оплачен' };
        resolve(response);
      }, 2000);
    });
  }, []);

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
      case 1:
        return <CustomerData formData={formsData} setFormData={setFormsData} />;
      case 2:
        return <ConfirmationOrder confirmationOrder={confirmationOrderData} />;
    }
  }, [page, formsData]);

  const FormTitles = ['Расчет стоимости', 'Данные покупателя', 'Подтверждение заказа'];

  return (
    <div className={styles.page}>
      {isSending ? (
        <span className={styles.paymentProcess}>Проведение оплаты...</span>
      ) : serverResponse ? (
        <PaymentSuccess
          title={serverResponse.message}
          onClick={() => {
            setFormsData(initialFormsData);
            setServerResponse(null);
            setPage(0);
          }}
        />
      ) : (
        <div className={styles.pageContainer}>
          <div>
            <h1>Бронирование номера</h1>
            <p>{FormTitles[page]}</p>
          </div>
          <div className={styles.formContainer}>{displayPage}</div>
          {page > 0 ? (
            <div className={styles.buttonsContainer}>
              <BackButton
                title={page === 1 ? 'Назад к расчету стоимости' : 'Назад к данным покупателя'}
                onClick={() => setPage(page - 1)}
              />
              <Button
                title={page === 1 ? 'далее' : 'Оплатить'}
                onClick={
                  page === 1
                    ? () => setPage(page + 1)
                    : () => {
                        setIsSending(true);
                        simulateServerRequest(confirmationOrderData)
                          .then((response) => {
                            setServerResponse(response);
                          })
                          .catch((error) => {
                            return error;
                          })
                          .finally(() => {
                            setIsSending(false);
                          });
                      }
                }
              />
            </div>
          ) : (
            <div className={styles.buttonContainer}>
              <Button title="Далее" onClick={() => setPage(page + 1)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

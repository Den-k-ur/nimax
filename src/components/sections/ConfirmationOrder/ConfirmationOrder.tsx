import React, { FC } from 'react';
import { ConfirmationOrderData } from 'src/models/formsData.dto';

const declensionOfNumber = (number: number, titles: string[]): string => {
  return titles[
    number % 10 == 1 && number % 100 != 11
      ? 0
      : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)
      ? 1
      : 2
  ];
};

const nights = ['ночь', 'ночи', 'ночей'];
const adults = ['взрослый', 'взрослых', 'взрослых'];
const kids = ['ребенок', 'ребенка', 'детей'];

export const ConfirmationOrder: FC<ConfirmationOrderData> = ({ confirmationOrder }) => {
  return (
    <>
      <div>
        <p>
          {confirmationOrder.secondName} {confirmationOrder.name} {confirmationOrder.surname}
        </p>
        <p>{confirmationOrder.phoneNumber}</p>
        <p>
          Номер «{confirmationOrder.roomType}» на {confirmationOrder.numberOfNights}{' '}
          {declensionOfNumber(confirmationOrder.numberOfNights, nights)}
        </p>
        <p>
          {confirmationOrder.numberOfAdults}{' '}
          {declensionOfNumber(confirmationOrder.numberOfAdults, adults)},{' '}
          {confirmationOrder.numberOfSchoolKids}{' '}
          {declensionOfNumber(confirmationOrder.numberOfSchoolKids, kids)} от 12 лет и{' '}
          {confirmationOrder.numberOfKids}{' '}
          {declensionOfNumber(confirmationOrder.numberOfKids, kids)} младше 12 лет
        </p>
        <p>Страховка {confirmationOrder.insurance ? 'включена' : 'не включена'}</p>
      </div>
      <div>
        <p>К оплате {confirmationOrder.totalPrice} &#8381;</p>
      </div>
    </>
  );
};

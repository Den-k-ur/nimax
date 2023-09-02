export type FormsDataDTO = {
  numberOfAdults: number;
  numberOfSchoolKids: number;
  numberOfKids: number;
  roomType: string;
  roomTypeLabel: string;
  numberOfNights: number;
  insurance: boolean;
  totalPrice: number;
  roomPrice: number;
  secondName: string;
  name: string;
  surname: string;
  phoneNumber: string;
  dateOfBirthday: string;
};

export type ConfirmationOrderDataDTO = {
  numberOfAdults: number;
  numberOfSchoolKids: number;
  numberOfKids: number;
  roomType: string;
  numberOfNights: number;
  insurance: boolean;
  totalPrice: number;
  secondName: string;
  name: string;
  surname: string;
  phoneNumber: string;
};

export type ConfirmationOrderData = {
  confirmationOrder: ConfirmationOrderDataDTO;
};

import { FormsDataDTO } from 'src/models/formsData.dto';

type FieldInfo = {
  label: string;
  fieldName: keyof FormsDataDTO;
  type: string;
  min?: number;
  max?: number;
};

type RoomType = {
  label: string;
  roomPrice: number;
};

export const FORM_FIELDS: FieldInfo[] = [
  { label: 'Количество взрослых', fieldName: 'numberOfAdults', type: 'number', min: 1 },
  {
    label: 'Количество детей от 5 до 12 лет',
    fieldName: 'numberOfSchoolKids',
    type: 'number',
    min: 0,
  },
  { label: 'Количество детей до 5 лет', fieldName: 'numberOfKids', type: 'number', min: 0, max: 3 },
  { label: 'Тип номера', fieldName: 'roomType', type: 'radio' },
  { label: 'Количество ночей', fieldName: 'numberOfNights', type: 'number', min: 1 },
  { label: 'Страховка', fieldName: 'insurance', type: 'checkbox' },
];

export const ROOM_TYPES: Record<string, RoomType> = {
  econom: { label: 'Эконом', roomPrice: 1800 },
  standart: { label: 'Стандарт', roomPrice: 2800 },
  lux: { label: 'Люкс', roomPrice: 4000 },
};

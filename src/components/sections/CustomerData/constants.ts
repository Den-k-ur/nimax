import { FormsDataDTO } from 'src/models/formsData.dto';

type FieldInfo = {
  label: string;
  fieldName: keyof FormsDataDTO;
  type: string;
  placeholder?: string;
  pattern?: string;
  require?: boolean;
};

export const CUSTOMER_DATA_FORM_FIELDS: FieldInfo[] = [
  {
    label: 'Фамилия',
    fieldName: 'secondName',
    type: 'text',
    placeholder: 'Введите фамилию',
    require: true,
  },
  {
    label: 'Имя',
    fieldName: 'name',
    type: 'text',
    placeholder: 'Введите имя',
    require: true,
  },
  {
    label: 'Отчество',
    fieldName: 'surname',
    type: 'text',
    placeholder: 'Введите фамилию',
  },
  {
    label: 'Номер телефона',
    fieldName: 'phoneNumber',
    type: 'tel',
    placeholder: '+7 999 123 45-67',
    require: true,
  },
  { label: 'Дата рождения', fieldName: 'dateOfBirthday', type: 'date', require: true },
];

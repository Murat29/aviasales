import { IRadioData, typeCheckboxesData } from '../types/types';

// export enum enumCheckboxesData {
//   'Без персадок' = 0,
//   'Одна пересадка' = 1,
//   'Две пересадка' = 2,
//   'Три пересадка' = 3,
// }

export const checkboxesData: typeCheckboxesData = [
  {
    title: 'Без пересадок',
    value: '0',
  },
  {
    title: '1 пересадка',
    value: '1',
  },
  {
    title: '2 пересадка',
    value: '2',
  },
  {
    title: '3 пересадка',
    value: '3',
  },
];

export const radioData: IRadioData[] = [
  {
    name: 'cheap',
    title: 'Самый дешевый',
    position: 'l',
  },
  {
    name: 'quick',
    title: 'Самый быстрый',
  },
  {
    name: 'optimal',
    title: 'Оптимальный',
    position: 'r',
  },
];

export type typeRadioValue = string;
export type typeCheckboxesData = IoneСheckbox[];
export type typefunctionChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => void;
export interface IoneСheckbox {
  title: string;
  value: string;
}
export type typeCheckedСheckboxes = string[];

export interface IRadioData {
  name: string;
  title: string;
  position?: 'l' | 'r';
}

export interface Iticket {
  price: number;
  carrier: string;
  segments: {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
  }[];
}

export interface IticketProps {
  data: {
    price: number;
    carrier: string;
    segments: IsegmentsProps[];
  };
}

export interface IsegmentsProps {
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  stops: string;
  transplants: string;
  duration: string;
}

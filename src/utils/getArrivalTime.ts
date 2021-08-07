import { getDepartureTime } from './getDepartureTime';

export function getArrivalTime(date: Date, duration: number): string {
  date.setMinutes(date.getMinutes() + duration);
  return getDepartureTime(date);
}

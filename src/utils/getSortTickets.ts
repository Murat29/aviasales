import { Iticket, typeRadioValue } from '../types/types';

export function getSortTickets(ticket: Iticket[], radioValue: typeRadioValue): Iticket[] {
  switch (radioValue) {
    case 'cheap':
      return [...ticket].sort((a: Iticket, b: Iticket) => a.price - b.price);

    case 'quick':
      return [...ticket].sort(
        (a: Iticket, b: Iticket) => getTotalDuration(a) - getTotalDuration(b)
      );
    case 'optimal':
      return [...ticket].sort((a: Iticket, b: Iticket) => {
        const coefficient = 4;
        return (
          a.price +
          getTotalDuration(a) * coefficient -
          (b.price + getTotalDuration(b) * coefficient)
        );
      });

    default:
      return ticket;
  }
}

function getTotalDuration(ticket: Iticket): number {
  return ticket.segments.reduce((acc: any, cur: any) => acc + cur.duration, 0);
}

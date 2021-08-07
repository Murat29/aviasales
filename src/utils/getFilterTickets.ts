import { Iticket, typeCheckedСheckboxes } from '../types/types';

export function getFilterTickets(
  ticket: Iticket[],
  checkedСheckboxes: typeCheckedСheckboxes,
  numder: number
): Iticket[] {
  if (ticket.length === 0) {
    return ticket;
  } else {
    const res: Iticket[] = [];

    for (let i = 0; res.length < numder && i < ticket.length; i++) {
      if (
        ticket[i].segments.every((el: any) => {
          return checkedСheckboxes.includes('' + el.stops.length);
        })
      ) {
        res.push(ticket[i]);
      }
    }
    return res;
  }
}

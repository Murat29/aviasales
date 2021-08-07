import React, { useMemo } from 'react';
import Ticket from '../Ticket/Ticket';
import { getArrivalTime } from '../../utils/getArrivalTime';
import { getDepartureTime } from '../../utils/getDepartureTime';
import { getTime } from '../../utils/getTime';
import { getTransplantsString } from '../../utils/getTransplantsString';
import { Iticket } from '../../types/types';

interface IticketCalculationsProps {
  data: Iticket;
}

const TicketCalculations = ({ data: { price, carrier, segments } }: IticketCalculationsProps) => {
  const calculatedData = useMemo(() => {
    return {
      price: price,
      carrier: carrier,
      segments: [
        {
          origin: segments[0].origin,
          destination: segments[0].destination,
          departureTime: getDepartureTime(new Date(segments[0].date)),
          arrivalTime: getArrivalTime(new Date(segments[0].date), segments[0].duration),
          stops: segments[0].stops.join(','),
          transplants: getTransplantsString(segments[0].stops.length),
          duration: getTime(segments[0].duration),
        },
        {
          origin: segments[1].origin,
          destination: segments[1].destination,
          departureTime: getDepartureTime(new Date(segments[1].date)),
          arrivalTime: getArrivalTime(new Date(segments[1].date), segments[1].duration),
          stops: segments[1].stops.join(','),
          transplants: getTransplantsString(segments[1].stops.length),
          duration: getTime(segments[1].duration),
        },
      ],
    };
  }, [carrier, price, segments]);

  return <Ticket data={calculatedData} />;
};

export default TicketCalculations;

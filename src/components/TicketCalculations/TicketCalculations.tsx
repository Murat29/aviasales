import React, { useMemo } from 'react';
import Ticket from '../Ticket/Ticket';
import Container from '../Container/Container';
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
      segments: segments.map((data) => {
        return {
          origin: data.origin,
          destination: data.destination,
          departureTime: getDepartureTime(new Date(data.date)),
          arrivalTime: getArrivalTime(new Date(data.date), data.duration),
          stops: data.stops.join(','),
          transplants: getTransplantsString(data.stops.length),
          duration: getTime(data.duration),
        };
      }),
    };
  }, [carrier, price, segments]);

  return (
    <Container>
      <Ticket data={calculatedData} />
    </Container>
  );
};

export default TicketCalculations;

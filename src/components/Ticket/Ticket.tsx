import React from 'react';
import Cell from '../Cell/Cell';
import Row from '../Row/Row';
import { IticketProps, IsegmentsProps } from '../../types/types';
import './Ticket.css';

const Ticket = ({ data: { price, carrier, segments } }: IticketProps) => {
  return (
    <li className="ticket">
      <Row isFirst={true}>
        <p className="ticket__price">{price} Р</p>
        <img
          className="ticket__logo"
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="Логотип авиакомпании."
        />
      </Row>
      {segments.map((rowData: IsegmentsProps, i: number) => (
        <Row key={i}>
          <Cell
            title={rowData.origin + '-' + rowData.destination}
            text={rowData.departureTime + '-' + rowData.arrivalTime}
          />
          <Cell title="В пути" text={rowData.duration} />
          <Cell title={rowData.transplants} text={rowData.stops} />
        </Row>
      ))}
    </li>
  );
};

export default Ticket;

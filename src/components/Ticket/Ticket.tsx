import React from 'react';
import logoTicket from '../../images/logo-ticket.png';
import './Ticket.css';

interface TicketProps {}

const Ticket: React.FC<TicketProps> = () => {
  return (
    <li className="ticket">
      <div className="ticket__row ticket__row_first">
        <p className="ticket__price">13 400 Р</p>
        <img className="ticket__logo" src={logoTicket} alt="Логотип авиакомпании." />
      </div>
      <div className="ticket__row">
        <div className="ticket__cell">
          <p className="ticket__cell-title">MOW – HKT</p>
          <p className="ticket__cell-value">10:45 – 08:00</p>
        </div>
        <div className="ticket__cell">
          <p className="ticket__cell-title">В пути</p>
          <p className="ticket__cell-value">21ч 15м</p>
        </div>
        <div className="ticket__cell">
          <p className="ticket__cell-title">2 пересадки</p>
          <p className="ticket__cell-value">HKG, JNB</p>
        </div>
      </div>
      <div className="ticket__row">
        <div className="ticket__cell">
          <p className="ticket__cell-title">MOW – HKT</p>
          <p className="ticket__cell-value">11:20 – 00:50</p>
        </div>
        <div className="ticket__cell">
          <p className="ticket__cell-title">В пути</p>
          <p className="ticket__cell-value">13ч 30м</p>
        </div>
        <div className="ticket__cell">
          <p className="ticket__cell-title">2 пересадки</p>
          <p className="ticket__cell-value">HKG</p>
        </div>
      </div>
    </li>
  );
};

export default Ticket;

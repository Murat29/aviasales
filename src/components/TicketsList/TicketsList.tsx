import React from 'react';
import { ReactNode } from 'react';
import './TicketsList.css';

interface ITicketsListProps {
  children: ReactNode;
}

const TicketsList: React.FC<ITicketsListProps> = ({ children }) => {
  return <ul className="tickets-list">{children}</ul>;
};

export default TicketsList;

import React from 'react';
import { ReactNode } from 'react';
import './Column.css';

interface IColumnProps {
  children: ReactNode;
}

const Column: React.FC<IColumnProps> = ({ children }) => {
  return <div className="column">{children}</div>;
};

export default Column;

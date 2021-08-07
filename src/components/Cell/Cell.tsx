import React from 'react';
import './Cell.css';

interface CellProps {
  title: string;
  text: string;
}

const Cell: React.FC<CellProps> = ({ title, text }) => {
  return (
    <div className="cell">
      <p className="cell__title">{title}</p>
      {text && <p className="cell__text">{text}</p>}
    </div>
  );
};

export default Cell;

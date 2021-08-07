import React, { ReactNode } from 'react';
import './Row.css';

interface RowProps {
  isFirst?: boolean;
  children: ReactNode;
}

const Row: React.FC<RowProps> = ({ isFirst, children }) => {
  return <div className={`row ${isFirst && 'row_first'}`}>{children}</div>;
};

export default Row;

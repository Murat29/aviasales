import React from 'react';
import { ReactNode } from 'react';
import './Container.css';

interface IContainerProps {
  children: ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;

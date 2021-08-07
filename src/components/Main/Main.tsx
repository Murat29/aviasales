import React from 'react';
import { ReactNode } from 'react';
import './Main.css';

interface IMainProps {
  children: ReactNode;
}

const Main: React.FC<IMainProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;

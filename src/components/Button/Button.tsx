import React from 'react';
import { ReactNode } from 'react';
import './Button.css';

interface IButtonProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {title}
    </button>
  );
};

export default Button;

import React from 'react';
import { ReactNode } from 'react';
import './Button.css';

interface IButtonProps {
  title: string;
  isShow: boolean;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ title, onClick, isShow }) => {
  return (
    <button onClick={onClick} className={`btn ${isShow && 'btn_show'}`}>
      {title}
    </button>
  );
};

export default Button;

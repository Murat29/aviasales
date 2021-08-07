import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип." />
    </header>
  );
};

export default Header;

import React from 'react';
import Filter from '../Filter/Filter';
import Tabs from '../Tabs/Tabs';
import Ticket from '../Ticket/Ticket';
import logo from '../../images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} alt="Логотип." />
      </header>
      <main className="app__main">
        <Filter />
        <div className="app__column">
          <Tabs />
          <ul className="app__tickets-list">
            <Ticket />
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

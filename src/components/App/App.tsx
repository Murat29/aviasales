import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { updataRadio, markСheckbox, removeСheckbox } from '../../redux/filterTicketsSlice';
import Filter from '../Filter/Filter';
import Container from '../Container/Container';
import Tabs from '../Tabs/Tabs';
import TicketCalculations from '../TicketCalculations/TicketCalculations';
import { getFilterTickets } from '../../utils/getFilterTickets';
import { getSortTickets } from '../../utils/getSortTickets';
import { typeRadioValue, typeCheckedСheckboxes, Iticket } from '../../types/types';
import logo from '../../images/logo.svg';
import './App.css';

function App() {
  const tickets: Iticket[] = useSelector((state: RootState) => state.tickets.tickets);
  const radioValue: typeRadioValue = useSelector((state: RootState) => state.filterTickets.radio);
  const checkedСheckboxes: typeCheckedСheckboxes = useSelector(
    (state: RootState) => state.filterTickets.checkboxes
  );
  const [numberTicketsDisplayed, setNumberTicketsDisplayed] = useState<number>(5);
  const [sortedTickets, setSortedTickets] = useState<Iticket[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setSortedTickets(getSortTickets(tickets, radioValue));
  }, [tickets, radioValue]);

  const filteredTickets: Iticket[] = useMemo(() => {
    return getFilterTickets(sortedTickets, checkedСheckboxes, numberTicketsDisplayed);
  }, [sortedTickets, checkedСheckboxes, numberTicketsDisplayed]);

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch(updataRadio(e.target.value));
  }

  function handleСheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
    const { checked, value } = e.target;

    if (checked) {
      dispatch(markСheckbox(value));
    } else {
      dispatch(removeСheckbox(value));
    }
  }

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} alt="Логотип." />
      </header>
      <main className="app__main">
        <Container>
          <Filter checkedСheckboxes={checkedСheckboxes} handleСheckbox={handleСheckbox} />
        </Container>
        <div className="app__column">
          <Tabs radioValue={radioValue} handleRadio={handleRadio} />
          <ul className="app__tickets-list">
            {filteredTickets.map((data: Iticket, i: number) => {
              return (
                <Container key={i}>
                  <TicketCalculations data={data} />
                </Container>
              );
            })}
          </ul>
          <button onClick={() => setNumberTicketsDisplayed((old) => old + 5)} className="app__btn">
            Показать еще 5 билетов!
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;

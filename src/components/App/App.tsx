import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { updataRadio, markСheckbox, removeСheckbox } from '../../redux/filterTicketsSlice';
import Filter from '../Filter/Filter';
import Tabs from '../Tabs/Tabs';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Column from '../Column/Column';
import TicketsList from '../TicketsList/TicketsList';
import TicketCalculations from '../TicketCalculations/TicketCalculations';
import { getFilterTickets } from '../../utils/getFilterTickets';
import { getSortTickets } from '../../utils/getSortTickets';
import { typeRadioValue, typeCheckedСheckboxes, Iticket } from '../../types/types';
import { getTickets } from '../../redux/ticketsSlice';
import './App.css';
import Button from '../Button/Button';
function App() {
  const tickets: Iticket[] = useSelector((state: RootState) => state.tickets.tickets);

  const radioValue: typeRadioValue = useSelector((state: RootState) => state.filterTickets.radio);

  const checkedСheckboxes: typeCheckedСheckboxes = useSelector(
    (state: RootState) => state.filterTickets.checkboxes
  );
  const [numberTickets, setNumberTickets] = useState<number>(5);
  const [sortedTickets, setSortedTickets] = useState<Iticket[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setSortedTickets(getSortTickets(tickets, radioValue));
  }, [tickets, radioValue]);

  const filteredTickets: Iticket[] = useMemo(() => {
    return getFilterTickets(sortedTickets, checkedСheckboxes, numberTickets);
  }, [sortedTickets, checkedСheckboxes, numberTickets]);

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

  function increaseNumberTickets() {
    setNumberTickets((old) => old + 5);
  }

  // useEffect(() => {
  //   dispatch(getTickets());
  // }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <Filter checkedСheckboxes={checkedСheckboxes} handleСheckbox={handleСheckbox} />
        <Column>
          <Tabs radioValue={radioValue} handleRadio={handleRadio} />
          <TicketsList>
            {filteredTickets.map((data: Iticket, i: number) => {
              return <TicketCalculations data={data} key={i} />;
            })}
          </TicketsList>
          <Button title="Показать еще 5 билетов!" onClick={increaseNumberTickets} />
        </Column>
      </Main>
    </div>
  );
}

export default App;

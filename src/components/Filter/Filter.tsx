import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { checkboxesData } from '../../utils/constants';
import './Filter.css';

function Filter() {
  return (
    <aside className="filter">
      <p className="filter__title">Количество пересадок</p>
      {checkboxesData.map((data) => (
        <Checkbox name={data.name} handleChange={() => {}} title={data.title} />
      ))}
    </aside>
  );
}

export default Filter;

import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import { checkboxesData } from '../../utils/constants';
import { typeCheckedСheckboxes, IoneСheckbox, typefunctionChangeInput } from '../../types/types';

import './Filter.css';

interface ItabsProps {
  checkedСheckboxes: typeCheckedСheckboxes;
  handleСheckbox: typefunctionChangeInput;
}
const Filter: React.FC<ItabsProps> = ({ checkedСheckboxes, handleСheckbox }) => {
  return (
    <aside className="filter">
      <p className="filter__title">Количество пересадок</p>
      {checkboxesData.map((data: IoneСheckbox) => (
        <Checkbox
          key={data.title}
          handleChange={handleСheckbox}
          data={data}
          checkedСheckboxes={checkedСheckboxes}
        />
      ))}
    </aside>
  );
};

export default Filter;

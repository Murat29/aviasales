import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Container from '../Container/Container';
import { checkboxesData } from '../../utils/constants';
import { typeCheckedСheckboxes, IoneСheckbox, typefunctionChangeInput } from '../../types/types';

import './Filter.css';

interface ItabsProps {
  checkedСheckboxes: typeCheckedСheckboxes;
  handleСheckbox: typefunctionChangeInput;
  handleCheckboxAll: typefunctionChangeInput;
}
const Filter: React.FC<ItabsProps> = ({ checkedСheckboxes, handleСheckbox, handleCheckboxAll }) => {
  return (
    <Container>
      <aside className="filter">
        <p className="filter__title">Количество пересадок</p>
        <Checkbox
          handleChange={handleCheckboxAll}
          data={{ title: 'Все', value: '-1' }}
          checkedСheckboxes={checkedСheckboxes}
        />
        {checkboxesData.map((data: IoneСheckbox) => (
          <Checkbox
            key={data.title}
            handleChange={handleСheckbox}
            data={data}
            checkedСheckboxes={checkedСheckboxes}
          />
        ))}
      </aside>
    </Container>
  );
};

export default Filter;

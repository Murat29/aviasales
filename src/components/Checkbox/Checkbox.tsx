import React from 'react';
import { IoneСheckbox, typeCheckedСheckboxes, typefunctionChangeInput } from '../../types/types';
import './Checkbox.css';

interface CheckboxProps {
  handleChange: typefunctionChangeInput;
  data: IoneСheckbox;
  checkedСheckboxes: typeCheckedСheckboxes;
}

const Checkbox: React.FC<CheckboxProps> = ({ handleChange, data, checkedСheckboxes }) => {
  return (
    <label className="checkbox">
      <input
        onChange={(e) => handleChange(e)}
        className="checkbox__invisible"
        type="checkbox"
        checked={checkedСheckboxes.indexOf(data.value) !== -1}
        value={data.value}
      />
      <span className="checkbox__visible"></span>
      {data.title}
    </label>
  );
};

export default Checkbox;

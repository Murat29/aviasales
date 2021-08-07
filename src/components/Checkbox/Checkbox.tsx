import React from 'react';
import { IoneСheckbox, typeCheckedСheckboxes, typefunctionChangeInput } from '../../types/types';
import { checkboxesData } from '../../utils/constants';
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
        checked={
          checkedСheckboxes.indexOf(data.value) !== -1 ||
          checkedСheckboxes.length === checkboxesData.length
        }
        value={data.value}
      />
      <span className="checkbox__visible"></span>
      {data.title}
    </label>
  );
};

export default Checkbox;

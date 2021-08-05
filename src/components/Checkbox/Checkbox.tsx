import React from 'react';
import './Checkbox.css';

interface CheckboxProps {
  name: string;
  handleChange: Function;
  title: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ handleChange, name, title }) => {
  return (
    <label className="checkbox">
      <input
        onChange={(e) => handleChange(e)}
        className="checkbox__invisible"
        type="radio"
        name={name}
        value={name}
        tabIndex={1}
      />
      <span className="checkbox__visible"></span>
      {title}
    </label>
  );
};

export default Checkbox;

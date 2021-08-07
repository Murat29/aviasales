import React from 'react';
import { typefunctionChangeInput } from '../../types/types';
import './InputRadio.css';

interface IinputRadioProps {
  currentValue: string;
  name: string;
  handleChange: typefunctionChangeInput;
  title: string;
  position?: 'l' | 'r';
}

const InputRadio: React.FC<IinputRadioProps> = ({
  currentValue,
  handleChange,
  name,
  title,
  position,
}) => {
  return (
    <label className="input-radio">
      <input
        onChange={(e) => handleChange(e)}
        checked={currentValue === name}
        className="input-radio__invisible"
        type="radio"
        name={name}
        value={name}
        tabIndex={1}
      />
      <span
        className={`input-radio__visible  ${
          position === 'l' && 'input-radio__invisible_position_left'
        } 
      ${position === 'r' && 'input-radio__invisible_position_right'}`}
      >
        {title}
      </span>
    </label>
  );
};

export default InputRadio;

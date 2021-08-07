import React from 'react';
import InputRadio from '../InputRadio/InputRadio';
import { typefunctionChangeInput, typeRadioValue, IRadioData } from '../../types/types';
import { radioData } from '../../utils/constants';
import './Tabs.css';

interface ItabsProps {
  radioValue: typeRadioValue;
  handleRadio: typefunctionChangeInput;
}
const Tabs: React.FC<ItabsProps> = ({ radioValue, handleRadio }) => {
  return (
    <div className="tabs">
      {radioData.map((data: IRadioData) => (
        <InputRadio
          key={data.name}
          handleChange={handleRadio}
          name={data.name}
          currentValue={radioValue}
          title={data.title}
          position={data.position}
        />
      ))}
    </div>
  );
};

export default Tabs;

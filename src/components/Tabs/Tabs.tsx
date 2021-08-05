import React from 'react';
import { useState } from 'react';
import InputRadio from '../InputRadio/InputRadio';

import './Tabs.css';

function Tabs() {
  const [radioValue, setRadioValue] = useState<string>('cheap');

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>): void {
    setRadioValue(e.target.value);
  }

  return (
    <div className="tabs">
      <InputRadio
        handleChange={handleRadio}
        name="cheap"
        currentValue={radioValue}
        title="Самый дешевый"
        position="l"
      />
      <InputRadio
        handleChange={handleRadio}
        name="quick"
        currentValue={radioValue}
        title="Самый быстрый"
      />
      <InputRadio
        handleChange={handleRadio}
        name="optimal"
        currentValue={radioValue}
        title="Оптимальный"
        position="r"
      />
    </div>
  );
}

export default Tabs;

import React, { useState } from 'react';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <p>Input value: {inputValue}</p>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default InputComponent;

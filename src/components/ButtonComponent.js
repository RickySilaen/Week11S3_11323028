import React, { useState } from 'react';

const ButtonComponent = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <p>Number of clicks: {clickCount}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ButtonComponent;

import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function Experiment() {
  const [ setDivVisibility,isDivVisible] = useState(true);

  const toggleDiv = () => {
    isDivVisible(!setDivVisibility);
  };

  return (
    <div>
      <button onClick={toggleDiv}>Toggle Div</button>
      {setDivVisibility && <div>This is a hidden div.</div>}
    </div>
  );
}

export default Experiment;
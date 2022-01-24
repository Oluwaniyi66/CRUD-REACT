import React from 'react';

function Child({ count, handleDecrement, handleReset, handleIncrement }) {



  const textColor = count > 0 ? 'green' : 'red';


  return <div style={{backgroundColor: count > 0 ? 'black' : 'green' }}>
    <h4 style={{ color: textColor }}>{count}</h4>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={handleDecrement} >Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>

    </div>
  </div>;
}

export default Child;

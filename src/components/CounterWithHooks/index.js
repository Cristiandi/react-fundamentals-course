import React, { useState } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={ () => setCounter(counter + 1) }>Add.</button>
    </div>
  );
}

export default Counter;
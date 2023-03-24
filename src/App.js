import { useState } from 'react';
import './App.css';

function App() {

  const [countValue, setCountValue] = useState(0);

  return (
    <div className="App">
      <div className='app'>
        <div className='counterValue'>
          {countValue}
        </div>
        <div className='button-group'>
          <button className='decrementBtn' onClick={() => setCountValue(countValue - 1)}><span>Decrement</span></button>
          <button className='incrementBtn' onClick={() => setCountValue(countValue + 1)}><span>Increment</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;

/* 
  => we need to explore useReducer() hook before Redux
  => we pass the initial state value in the useState() hook
  => useState() hook returns an array which has 2 items.
    -> first one is the state
    -> second one is the set function which change the state value
  => React automatically handle re-rendering part
  => a state which is declared inside a component called local state
*/

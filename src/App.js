import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [state, setState] = useState('hello');

  function nameChange(e){
    setState(e.target.value)
  }

  return (
    <div className='App'>
      <input className="input" value={state} onChange={nameChange}/>
      <p>You typed: {state}</p>
      <button onClick={() => {setState('hello')}}>
        Reset
      </button>
    </div>
  );
}

export default App;

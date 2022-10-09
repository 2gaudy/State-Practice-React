import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MealsProvider from './providers/MealsProvider'
import Counter from './components/Counter'
import MealsList from './components/MealsList'


function App() {
  const [state, setState] = useState('hello');

  function nameChange(e){
    setState(e.target.value)
  }

  return (
    <div className='App'>
      <MealsProvider>
        <MealsList/>
        <Counter/>
      </MealsProvider>
      <input className="input" onChange={nameChange}/>
      <p>You typed: {state}</p>
      <button onClick={() => {setState('hello')}}>
        Reset
      </button>
    </div>
  );
}

export default App;

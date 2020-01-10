import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions';
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1>Counter: { counter }</h1>
      <button onClick={() => dispatch(increase(5))}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      { isLogged ? <h3>I shouldn't see any important information.</h3> : '' }
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

import Tab from 'react-bootstrap/Tab';

function App() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
  return (
    <div className="App">
      <header >
        <h1>hi</h1>
      </header>
      <div>
        <Tab></Tab>
      </div>
    </div>
  );
}

export default App;

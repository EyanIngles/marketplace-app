import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

import { Tab, Tabs } from 'react-bootstrap';

function App() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
  return (
    <div className="App">
      <header >
        <h1>hi</h1>
      </header>
      <div>
        <Tabs>Tab1</Tabs>
      </div>
    </div>
  );
}

export default App;

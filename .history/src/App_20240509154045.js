import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function App() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
  return (
    <div className="App">
      <header >
        <h1>hi</h1>
      </header>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="nav-tabs"
      justify
    >
      <Tab
      eventKey="home"
      title="List"
      className='nav'>
      </Tab>
      <Tab eventKey="profile"
      title="Buy"
      className='nav'>
      </Tab>
      <Tab eventKey="longer-tab"
      title="Mint"
      className='nav'>
      </Tab>
    </Tabs>
    <hr>
    </div>
  );
}

export default App;

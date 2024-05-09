import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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
      id=""
      className="nav-tabs"
      justify
    >
      <Tab
      eventKey="home"
      title="list"
      className='nav-tab'>
      </Tab>
      <Tab eventKey="profile" title="buy"
      className='nav-tab'>
      </Tab>
      <Tab eventKey="longer-tab" title="mint"
      className='nav-tab'>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>

      </Tab>
    </Tabs>
    </div>
  );
}

export default App;

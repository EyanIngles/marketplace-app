import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import styles from './Counter.module.css';

function App() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {count}
      </header>
    </div>
  );
}

export default App;

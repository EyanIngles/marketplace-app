import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";


export default function App() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();

    return (
        <div>
            <h1>increment</h1>
            <button />
            {count}
        </div>
    )
}
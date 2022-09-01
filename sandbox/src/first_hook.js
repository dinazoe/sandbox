import React, { useState } from 'react';

function Increment(x) {
    return x + 1;
}

export function Button2() {
    return <button>Test</button>;
}

export function IncrementButton() {

    // constants can't change value
    const [data, setData] = useState(0);
    const [counter, setCounter] = useState(0);
    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}

function getRandomValue() {
    return Math.random()
}

export default function Button() {
    let randomInitValue = Math.random();
    const [data, setData] = useState(randomInitValue);
    const clickHandler = () => setData(getRandomValue)

    // one line return
    // return <button onClick={() => setData(getRandomValue)}>{data}</button>
    
    return (
        <button onClick={clickHandler}>
            {data}
        </button>
    );
}

function Display() {
    return (
        <div>

        </div>
    );
}
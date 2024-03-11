import React, { useState } from "react";

// Decrement button
const DecrementButton = ({count, setCount}) => (
    <button className="decrementButton" onClick={() => {setCount(count - 1)}}>
        -
    </button>
)

// Decrement button
const IncrementButton = ({count, setCount}) => (
    <button className="incrementButton" onClick={() => {setCount(count + 1)}}>
        +
    </button>
)

// Counter Number
const CountNumber = ({count, setCount}) => {
    return (
        <div>
            {count}
        </div>
    )
}


const CounterApp = () => {
    const [count, setCount] = useState(0);

    counterAppStyles = {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        gap : "10px"
    }

    return(
        <div style={counterAppStyles} className="counterApp">
            <DecrementButton count={count} setCount={setCount} />
            <CountNumber count={count} setCount={setCount} />
            <IncrementButton count={count} setCount={setCount} />
        </div>
    )
}

export default CounterApp;
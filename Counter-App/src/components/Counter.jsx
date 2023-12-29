import { useState } from "react"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


const Increment = ({count, setCount}) => (
    <h1 className="incrementButton" onClick={() => setCount(count+1)}>
        +
    </h1>
)

const Counter = ({count, milestone}) => {

    const { width, height } = useWindowSize()
    if (milestone.status == true && milestone.value == count){
        return (
            <>
                <h1 className="counterDisplay"> {count} </h1>
                <Confetti width={width} height={height} initialVelocityY={18} initialVelocityX={10} numberOfPieces={700} gravity={0.6} recycle={false} />
            </>
        )
    }
    return (<h1 className="counterDisplay"> {count} </h1>)
}

const Decrement = ({count, setCount}) => (
    <h1 className="decrementButton" onClick={ () => setCount(count-1)}> - </h1>
)


const CounterComponent = ({milestone}) => {

    const [count, setCount] = useState(0);
    
    return (
        <>
            <div className="counterWrapper">
                <Decrement count={count} setCount={setCount} />
                <Counter count={count} milestone={milestone} />
                <Increment count={count} setCount={setCount}/>
            </div>
        </>
    )
}

export default CounterComponent;
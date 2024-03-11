import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Content = (props) => {

  const days = props.days;
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);

  const pStyle = {
    textAlign : "center"
  }

  if(days < 0){
    return (<p style={pStyle}> {Math.abs(days)} days ago, there was {currentDate.toDateString()} </p>)
  }
  else if (days > 0){
    return (<p style={pStyle}>After {days} days there is {currentDate.toDateString()} </p>)
  }
  return (<p style={pStyle}> Today is {currentDate.toDateString()} </p>)
}


function App() {

  const [steps, setSteps] = useState(1);
  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      
      {/* Steps controller */}
      <div style={{ display : "flex", justifyContent :"center", alignItems : "center", gap : "10px" }}>
          <button onClick={() => setSteps(prev => prev - 1)}> - </button>
          <p> {steps} Steps</p>
          <button onClick={() => setSteps(prev => prev + 1)}> + </button>
      </div>

      {/* Counter controller */}
      <div style={{ display : "flex", justifyContent :"center", alignItems : "center", gap : "10px" }}>
          <button onClick={() => setCounter(prev => prev - steps)}> - </button>
          <p> {counter} Counter </p>
          <button onClick={() => setCounter(prev => prev + steps)}> + </button>
      </div>

      
      {/* Display */}
      <Content days={counter} />

    </div>
  );
}

function AppV2() {

  const [steps, setSteps] = useState(1);
  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      
      {/* Steps controller */}
      <div style={{ display : "flex", justifyContent :"center", alignItems : "center", gap : "10px" }}>
        <input type='range' value={steps} min={0} max={10} onChange={e => setSteps(Number(e.target.value))} />
        {steps}
      </div>

      {/* Counter controller */}
      <div style={{ display : "flex", justifyContent :"center", alignItems : "center", gap : "10px" }}>
          <button onClick={() => setCounter(prev => prev - steps)}> - </button>
          <input value={counter} type='number' onChange={e => setCounter(Number(e.target.value))}/>
          <button onClick={() => setCounter(prev => prev + steps)}> + </button>
      </div>

      
      {/* Display */}
      <Content days={counter} />

    </div>
  );
}



export default AppV2;

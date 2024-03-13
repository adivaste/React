import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const stepSize = 5;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleOnClickPrevious(){
    if(step > 1){
      setStep(prev => prev - 1);
    }
  }

  function handleOnClickNext(){
    if(step < stepSize){
      setStep(prev => prev + 1);
    }
  }

  return (
    <div className="App flex justify-center items-center w-full h-full">
        <div className='absolute flex justify-center items-center text-xl text-bold rounded-full p-4 bg-red-400 w-8 h-8 cursor-pointer top-4 right-4 ' onClick={() => setIsOpen(prev => !prev)}>&#10005;</div>
        <div className={`transition-all duration-200 ease-in bg-zinc-300 w-5/12 rounded-lg p-4 h-72 flex flex-col justify-between ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className='steps flex items-center justify-between p-4'>
                {Array.from({length : stepSize}, (v, i) => i+1).map(item => <span className={`rounded-full text-zinc-100 w-8 h-8 flex justify-center items-center text-xl font-semibold ${item <= step ? "bg-purple-600" : "bg-zinc-600"} `}>{item}</span>)}
            </div>
            <div className='message'>
              <h1 className='text-center p-4 text-2xl font-semibold'>This is the step {step} 🎉</h1>
            </div>
            <div className='buttons flex justify-between items-center p-2 '>
                <button onClick={handleOnClickPrevious} className='text-white rounded-full bg-purple-600 px-3 py-1'>Previous</button>
                <button onClick={handleOnClickNext} className='text-white rounded-full bg-purple-600 px-3 py-1'>Next</button>
            </div>
        </div>
    </div>
  );
}

export default App;

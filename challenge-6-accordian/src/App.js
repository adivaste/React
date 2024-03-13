import { useState } from 'react';
import './App.css';
import Component from './components/Component';

function App() {

  const [openAccordianId, setOpenAccordianId] = useState(null);
  const data = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces."
    },
    {
        id: 2,
        question: "What are the key features of React?",
        answer: "Key features of React include virtual DOM, JSX, component-based architecture, and uni-directional data flow."
    },
    {
        id: 3,
        question: "How does React handle data binding?",
        answer: "React handles data binding through one-way data flow. Changes to the model automatically update the view."
    },
    {
        id: 4,
        question: "What is JSX in React?",
        answer: "JSX is a syntax extension for JavaScript used with React to describe what the UI should look like."
    }
];

  return (
    <>
        <div className="App flex justify-center bg-zinc-700 h-full flex-col">
            <h1 className='text-4xl text-center p-8 text-zinc-100 font-semibold'>Accordian Menu 🪗 </h1>
            {data.map(item =>  <Component setOpenAccordianId={setOpenAccordianId} openAccordianId={openAccordianId} data={item} />)}
        </div>
    </>
  );
}

export default App;

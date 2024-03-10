import { useState } from 'react';
import './App.css';


const data = [
  {
    id: 1,
    textContent: "What language is React based on?",
    answer: "JavaScript",
    backgroundColor: "bg-zinc-200"
  },
  {
    id: 2,
    textContent: "What does JSX stand for in React?",
    answer: "JavaScript XML",
    backgroundColor: "bg-zinc-300"
  },
  {
    id: 3,
    textContent: "What is the purpose of the componentDidMount() lifecycle method in React?",
    answer: "To perform actions after the component is mounted",
    backgroundColor: "bg-zinc-400"
  },
  {
    id: 4,
    textContent: "Which hook is used to perform side effects in functional components in React?",
    answer: "useEffect",
    backgroundColor: "bg-zinc-500"
  },
  {
    id: 5,
    textContent: "Which library is commonly used for client-side routing in React applications?",
    answer: "React Router",
    backgroundColor: "bg-zinc-600"
  },
  {
    id: 6,
    textContent: "What is the purpose of keys in React lists?",
    answer: "To uniquely identify list items and improve performance",
    backgroundColor: "bg-zinc-700"
  }
];


function App() {

  const [activeId, setActiveId] = useState(null);

  function handleClick(item){
    if (activeId === item.id ) setActiveId(null);
    else setActiveId(item.id);
  }

  return (
    <div className="App w-full h-full ">
        <h1 className='text-center text-5xl font-semibold pt-12'>Flashcards App</h1>
        <div className='flashcards grid grid-cols-3 gap-y-6 gap-x-10 mt-16 px-16'>
          {data.map(item => {
              return (
                <div onClick={() => handleClick(item)} key={item.id} className={`${item.id === activeId ? "bg-green-300" : "bg-zinc-200"} cursor-pointer transition-all duration-200 flex justify-center font-medium text-center items-center p-4 text-xl border-2 border-zinc-300 rounded-lg h-52`}>
                  {activeId == item.id ? item.answer : item.textContent }
                </div>
              )
          })}
        </div>
    </div>
  );
}

export default App;

import React from "react"
import ReactDOM from "react-dom/client"
import Counter from "./components/Counter"
import Title from "./components/Title";
import TargetOption from "./components/MilestoneOption";
import { useState } from "react";

// Define the root here
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


// Create CounterApp Component
const CounterApp = () => {
    
    const [milestone, setMilestone] = useState({status : false, value : 0});

    return (
        <>
            <Title />
            <Counter milestone={milestone} />
            <TargetOption milestone={milestone} setMilestone={setMilestone} />
        </>
    )
}

// Render the react page
root.render(<CounterApp/>);
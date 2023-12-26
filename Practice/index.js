import React from "react"
import ReactDOM from "react-dom/client"

const element = React.createElement("h1", {}, "Hello Guys!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(element);



const element2 = (<h1 id="name" key="val" color="red" className="ele">
    Welcome here
    </h1>);


// React element
const Title = () => <h1> Hello React from element ! </h1>;

// React Functional component
const FunctionalComponent = () => {
    return (
    <div>
        {Title()}
        { 5 + 9 + 78}
        <h1> Hello world from component </h1>
    </div>
    )
}

const FunctionalComponent2 = () => (<h1> Hello world </h1>);

root.render(<FunctionalComponent/>);
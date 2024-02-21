import React from "react";
import ReactDOM from "react-dom/client";
import './public/styles/App.css'

// const element = React.createElement("h1", {}, "Hell world");
// const root = ReactDOM.createRoot(document.getElementById("root"));


// // Element 
// const element2 = (
//     <div>
//         Helllo world 
//         <span>Good world</span> 
//         <h1>Woowowwowwo</h1> 
//     </div>
// )


// // Functional component
// // Fucntion returning the JSX syntax

// const FunctionalComponent = () => {
//     return (
//         <div className="parent">
//             <div> Good </div>
//             <div> When</div> 
//         </div>
//     )
// }

// const FunctionalComponent2 = () => ( <h1>Adi </h1> )

// console.log(FunctionalComponent)

// root.render(<FunctionalComponent />);


// -----------------------------------------

// Element
const title = <h1 color="red"> Exploring the Technology </h1>
const subTitle = <h3>with the presence of the AI</h3>

// Component 
const Body = () => {

    // Stylings
    const imgStyle = {
        border:"2px solid red",
        borderRadius:"10px" 
    };

    // URLS
    imgURL = "https://i.imgur.com/j6ExuPb.png";

    return (<div>
        {title}
        <img style={imgStyle} src={imgURL} />
        {subTitle}
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body></Body>);
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";


const App = () => {
    return(
        <>
            <Header/>
            <Menu/>
            <Footer/>
        </>
    )
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

// React before 18
// React.render(<App/>)
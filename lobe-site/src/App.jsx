import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import "./styles/app.css"


const App = () => {

    return (
        <div id="app">
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}

export default App;
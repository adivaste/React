import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { useState } from "react"

// React element
const title = (
    <h1> Welcome to the React Project !</h1>
);


// Landing Page 
const LandingPage = () => {
    
    return (
    <React.Fragment>
        <Header />
        <Body />
        <Footer />
    </React.Fragment>)
    
    /*
    Header
        - Logo
        - Navigation menu
        - Get started button
    Body
        - Small Intro line
        - Heading
        - subheading
        - Input box and button
        - Small outro line
    Footer
        - Three divs
            - icons
            - title 
            - description
    */
}

// Root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LandingPage />);
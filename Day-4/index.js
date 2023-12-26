import React from "react"
import ReactDOM from "react-dom/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'


// React element
const title = (
    <h1> Welcome to the React Project !</h1>
);


// === Header component ===

// 1. Logo
const logo = (
    <div className="logo" style={{ margin:"0px 0px", width:"150px" }}>
        <img 
            alt="Delaware Logo"
            src="https://gcdnb.pbrd.co/images/W0YtbOq0wJpl.png?o=1"
            style={{ maxWidth : '100%',height: 'auto', scale : "1.2" }}
        />
    </div>
)

// 2. Navigation Menu
const navigationMenu = (
    <div className="navigationMenu">
        <ul style={{
            listStyle : "none",
            display : "flex",
            gap : "50px",
            alignItems : "center",
            cursor: "pointer",
            fontFamily : "SF Pro Display",
            fontSize:"18px"
        }}>
            <li> Free Landing Pages</li>
            <li> Features </li>
            <li> Services </li>
            <li> Pricing </li>
            <li> Contact </li>
        </ul>
    </div>
)

// 3. Get started button
const getStartedButton = (
    <div className="getStartedButton">
        <button style={{
            padding : "8px 20px",
            background : "white",
            border : "2px solid #16a085",
            fontSize : "16px",
            fontFamily : "SF Pro Display",
            fontWeight : "500"
        }}> Get Started ! </button>
    </div>
)

const HeaderComponent = () => {
    return (
        <header style={{
            display : "flex",
            justifyContent : "space-around",
            alignItems : "center",
            height : "10vh",
        }}>
            {logo}
            {navigationMenu}
            {getStartedButton}
        </header>
    )
}

// === BODY ===

// 1. Small Intro line
const smallIntroLine = (
    <div style={{
        fontWeight : "600",
        wordSpacing : "2.3px",
        letterSpacing : "1.4px"
    }}>
        PRESENT YOUR SERVICE
    </div>
)

// 2. Heading
const heading = (
    <div style={{
        fontSize : "24px",
        margin : "3px"
    }}>
        <h1>Make Landing Page,
        <br/>Fast and Easily.</h1>
    </div>
)

// 3. subheading
const subHeading = (
    <>
        <p style={{ margin : "2px 0px", fontSize : "17px" }}>Create Custom Landing Pages with shades that convert,<br/>
        more visitors than any website - no coding required</p>
    </>
)

// 4. Input box and button
const inputBoxAndButton = (
    <div>
        <input placeholder="Enter Your Email" type="text" style={{
            width : "300px",
            height : "40px", 
            fontSize : "16px",
            margin : "5px",
            padding : "10px 10px",
            background : "none",
            border : "2px solid #16a085",
            padding : "0px 20px",
            fontSize : "17px",
            fontWeight : "500",
            fontFamily : "SF Pro Display",
        }}/> 
        <button style={{
            width : "120px",
            height : "40px",
            fontSize : "16px",
            margin : "5px",
            textAlign : "center",
            background : "#16a085",
            border : "2px solid #16a085",
            padding : "0px 20px",
            fontSize : "17px",
            fontWeight : "500",
            fontFamily : "SF Pro Display",
            color : "#ecf0f1"

        }}> Subscribe </button>
    </div>
)

// 5. Small outro line
const smallOutroLine = (
    <div style={{
        fontWeight : "500",
        wordSpacing : "1.8px"
    }}>
        TRUSTED BY 50,000+ CUSTOMERS !
    </div>
)

const BodyComponent = () => {
    return (
        <div style={{
            textAlign:"center",
            display : "flex",
            flexDirection : "column",
            gap : "20px",
            alignItem: "center",
            margin : "50px 0px",
        }}>
            {smallIntroLine}
            {heading}
            {subHeading}
            {inputBoxAndButton}
            {smallOutroLine}
        </div>
    )
}

// === FOOTER ===

const featuresData = [
    {
        icon : faPen,
        title : "Easy To Use",
        description : "Editing and customizing eassential Landing page is easy and fast"
    },
    {
        icon : faLayerGroup,
        title : "100% Responsive",
        description : "Editing and customizing eassential Landing page is easy and fast"
    },
    {
        icon : faFile,
        title : "50+ New Pages",
        description : "Editing and customizing eassential Landing page is easy and fast"
    }
]

const FeatureDivComponent = ({feature}) => {
    const {icon, title, description} = feature;

    return (
            <>
                <div className="feature" style={{
                    margin : "10px",
                    display : "flex",
                    gap : "10px"
                }}>
                    <div className="featureIcon" style={{
                        fontSize : "25px",
                        textAlign : "center",
                        display : "flex",
                        alignItems : "center",
                        padding : "10px"
                    }}> <FontAwesomeIcon icon={icon}/> </div>

                    <div className="featureContent" style={{
                        padding : "0px 20px"
                    }}>
                        <p className="featureTitle" style={{
                        fontSize : "22px",
                        fontWeight : "700",
                        padding : "5px 0px"
                    }}> {title} </p>
                        <p className="featureTDescription"> {description} </p>
                    </div>
                </div>
            </>
        )
    }

const FooterComponent = () => {
    return (
        <footer style={{
            width : "100%",
            height : "auto",
            display : "flex",
            justifyContent : "space-evenly",
            padding : "0px 50px",
            margin : "auto"
        }}>

            <FeatureDivComponent feature={featuresData[0]}/>
            <FeatureDivComponent feature={featuresData[1]}/>
            <FeatureDivComponent feature={featuresData[2]}/>
          
        </footer>
    )
}


// React component
const LandingPage = () => {

    return (
    <React.Fragment>
        { HeaderComponent() }
        { BodyComponent() }
        { FooterComponent() }
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
root.render(LandingPage());
// === Header component ===
import { logoURL } from "../constants"

// 1. Logo
const logo = (
    <div className="logo" style={{ margin:"0px 0px", width:"150px" }}>
        <img 
            alt="Delaware Logo"
            src={logoURL}
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
            <li> Contact Us </li>
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

const Header = () => {
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

export default Header;
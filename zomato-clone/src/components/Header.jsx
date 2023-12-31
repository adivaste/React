import { useState } from "react";
import NavbarComponent from "./Navbar";
import './../styles/index.css'

// Logo
const logo = (
    <div className="logo" style={{
        padding:"20px 0px 0px 10px"
    }}>
        <img style={{
            maxHeight:"65px",
            width:"auto",
        }} src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="Zomato Logo" />
    </div>
)

// Title 
const title = (
    <div>
        <h1 style={{ fontFamily:"Metropolis", fontWeight:"500", fontSize:"36px", padding:"35px 0px" }}>Discover the best food & drinks in <b>Pune</b></h1>
    </div>
)

// Search Bar
const SearchBarComponent = () => {
    const [query, setQuery] = useState("");
    return (
        <div className="searchBar" style={{
            width:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            padding : "10px",
            marginBottom : "80px",
            gap : "10px"
        }}>
            <input placeholder="Baner, Pune   |   Search for restaurant, cuisins or a dish" type="text" value={query} style={{
                width : "550px",
                padding: "15px 20px",
                fontSize : "16px",
                borderRadius : "8px",
                border :"0.8px solid #e8e8e8",
                outline : "none",
                fontFamily : "Metropolis",
                background : "#ffffff",
            }} onChange={(e) => setQuery(e.target.value)}/>
            <button style={{
                width : "120px",
                padding: "15px 20px",
                fontSize : "16px",
                border :"0.8px solid #e8e8e8",
                borderRadius : "8px",
                background : "#ffffff",
                outline : "none",
                fontFamily : "Metropolis",
            }} >Search </button>
        </div>
    )
}


const HeaderComponent = () => {
    return (
        <header style={{
            background: `url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")`,
            color:"white",
            backgroundSize:"cover",
            fontFamily:"Metropolis"
        }}>
            <NavbarComponent />
            <div className="postNavbar" style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
                {logo}
                {title}
                <SearchBarComponent />
            </div>
        </header>
    )
}

export default HeaderComponent;

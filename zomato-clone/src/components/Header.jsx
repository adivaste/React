import restaurantsData from "../constants"
import './../styles/index.css'

// Function to calculate getFilteredRestaurants
function getFilteredRestaurants(query){
    const res = restaurantsData.filter((restaurant) => (restaurant.name.toLowerCase().includes(query.toLowerCase())))
    console.log(query, res);
    return res;
}


// Navbar component
const NavbarComponent = () => (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center", 
        padding : "20px"
    }}>
        <div className="getTheApp" style={{
            padding:"10px", 
            cursor: "pointer"
        }}> Get the App </div>
        <div className="navigationMenu">
            <ul style={{
                display:"flex",
                listStyle:"none",
                alignItems:"center",
                justifyContent:"space-between", 
                padding:"10px",
                margin : "0px",
                gap:"30px",
                fontSize : "16px",
                cursor: "pointer"
            }}>
                <li>Investor Relations</li>
                <li>Add Restaurant</li>
                <li>Log In</li>
                <li>Sign Up</li>
            </ul>
        </div>
    </div>
)

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
const SearchBarComponent = (props) => {
    
    const {query, setQuery, restaurants, setRestaurants} = props;

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
            }} onChange={(e) => {
                setQuery(e.target.value);
            }}/>
            <button onClick={() => {
                const filteredRestaurants = getFilteredRestaurants(query);
                setRestaurants(filteredRestaurants);
            }} style={{
                width : "120px",
                padding: "15px 20px",
                fontSize : "16px",
                border :"0.8px solid #e8e8e8",
                borderRadius : "8px",
                background : "#ffffff",
                outline : "none",
                fontFamily : "Metropolis",
                cursor: "pointer"
            }} >Search </button>
        </div>
    )
}


const HeaderComponent = (props) => {

    const {query, setQuery, restaurants, setRestaurants} = props;

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
                <SearchBarComponent query={query} setQuery={setQuery} restaurants={restaurants} setRestaurants={setRestaurants} />
            </div>
        </header>
    )
}

export default HeaderComponent;

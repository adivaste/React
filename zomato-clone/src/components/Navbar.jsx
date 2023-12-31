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

export default NavbarComponent;
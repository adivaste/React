import Logo from "./../svgs/logo.svg"
import "./../styles/logo.css"

// Logo Component
const LogoComponent = () => {
    
    return (
        <a href="/">
            <img src={Logo} alt="logo"/> 
            <span>Github</span>
        </a>
    )
}

export default LogoComponent;
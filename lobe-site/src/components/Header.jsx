import LogoComponent from "./Logo";
import NavbarComponent from "./Navbar";
import DownloadComponent from "./Download";
import "./../styles/header.css"

const HeaderComponent = () => {

    return (
        <header>
            <LogoComponent />
            <NavbarComponent />
            <DownloadComponent />
        </header>
    )
}

export default HeaderComponent;
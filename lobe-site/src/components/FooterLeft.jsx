import LogoComponent from "./Logo"
import "./../styles/footerLeft.css"

const FooterLeftComponent = () => {
    return (
        <div className="footerLeft">
            <LogoComponent />
            <p>A product by Microsoft.  <br/>All rights reserved. <br/>© Microsoft 2021 </p>
        </div>
    )
}

export default FooterLeftComponent;
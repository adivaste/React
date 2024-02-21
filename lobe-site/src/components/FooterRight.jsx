import "./../styles/footerRight.css"
import FacebookIcon from "remixicon-react/FacebookBoxFillIcon"
import TwitterIcon from "remixicon-react/TwitterFillIcon"
import LinkedinIcon from "remixicon-react/LinkedinBoxFillIcon"

const FooterRightComponent = () => {
    return (
        <div className="socialMediaIcons">
            <a href=""> <FacebookIcon color="white" size={20}/> </a>
            <a href=""> <TwitterIcon color="white" size={20}/> </a>
            <a href=""> <LinkedinIcon color="white" size={20}/> </a>
        </div>
    )
}

export default FooterRightComponent;
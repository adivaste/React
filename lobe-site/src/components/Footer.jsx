import FooterLeftComponent from "./FooterLeft"
import FooterRightComponent from "./FooterRight"
import FooterCommonComponent from "./FooterCommon"
import "./../styles/footer.css"

const FooterComponent = () => {
    return (
        <footer>
            <FooterLeftComponent />
            <FooterCommonComponent title="About" list={["Download", "Overview", "Examples", "Blog"]} />
            <FooterCommonComponent title="General" list={["Notice", "Liecence", "Press Inquiry", "Press Images"]} />
            <FooterCommonComponent title="Resources" list={["Help", "Tour", "Contact", "Privicy"]} />
            <FooterRightComponent />
        </footer>
    )  
}

export default FooterComponent;

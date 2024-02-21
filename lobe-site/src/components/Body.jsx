import VideoImage from "./../images/Video.jpg"
import "./../styles/body.css"
import DownloadComponent from "./Download"

// Title
const title = (
    <h1> Lobe Tour </h1>
)

// Subtitle
const subTitle = (
    <h4>
        Build your first machine learning model in ten minutes.
        <br />No code or experience required
    </h4>
)

// Image
const image = <img src={VideoImage} alt="" />

// Bottom title
const bottomTitle = (
    <h1> Train your app <br /> with Lobe </h1>
)

// Dummy 
const dummyDiv = (
    <div className="dummyDiv"></div>
)


const BodyComponent = () => {

    const DownloadComponentStyle = {
        margin:"30px 0px",
        padding:"0px 20px",
        fontSize:"22px",
        height:"45px"
    }

    return(
        <main>
            { dummyDiv }
            { title }
            { subTitle }
            { image }
            { bottomTitle }
            <DownloadComponent customStyles={DownloadComponentStyle} />    
        </main>
    )
}

export default BodyComponent;
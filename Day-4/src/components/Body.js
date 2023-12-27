// === BODY ===

// 1. Small Intro line
const smallIntroLine = (
    <div style={{
        fontWeight : "600",
        wordSpacing : "2.3px",
        letterSpacing : "1.4px"
    }}>
        " PRESENT YOUR SERVICE "
    </div>
)

// 2. Heading
const heading = (
    <div style={{
        fontSize : "24px",
        margin : "3px"
    }}>
        <h1>Make Landing Page,
        <br/>Fast and Easily.</h1>
    </div>
)

// 3. subheading
const subHeading = (
    <>
        <p style={{ margin : "2px 0px", fontSize : "17px" }}>Create Custom Landing Pages with shades that convert,<br/>
        more visitors than any website - no coding required</p>
    </>
)

// 4. Input box and button
const inputBoxAndButton = (
    <div>
        <input placeholder="Enter Your Email" type="text" style={{
            width : "300px",
            height : "40px", 
            fontSize : "16px",
            margin : "5px",
            padding : "10px 10px",
            background : "none",
            border : "2px solid #16a085",
            padding : "0px 20px",
            fontSize : "17px",
            fontWeight : "500",
            fontFamily : "SF Pro Display",
        }}/> 
        <button style={{
            width : "120px",
            height : "40px",
            fontSize : "16px",
            margin : "5px",
            textAlign : "center",
            background : "#16a085",
            border : "2px solid #16a085",
            padding : "0px 20px",
            fontSize : "17px",
            fontWeight : "500",
            fontFamily : "SF Pro Display",
            color : "#ecf0f1"

        }}> Subscribe </button>
    </div>
)

// 5. Small outro line
const smallOutroLine = (
    <div style={{
        fontWeight : "500",
        wordSpacing : "1.8px"
    }}>
        TRUSTED BY 50,000+ CUSTOMERS !
    </div>
)

const Body = () => {
    return (
        <div style={{
            textAlign:"center",
            display : "flex",
            flexDirection : "column",
            gap : "20px",
            alignItem: "center",
            margin : "50px 0px",
        }}>
            {smallIntroLine}
            {heading}
            {subHeading}
            {inputBoxAndButton}
            {smallOutroLine}
        </div>
    )
}

export default Body;
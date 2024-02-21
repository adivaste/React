import "./../styles/footerCommon.css"

const FooterCommonComponent = ({title, list}) => {

    var listItems = list.map( (item) => <li key={item}> {item} </li> );

    return (
        <div className="footerCommon">
            <p className="title"> { title } </p>
            <ul>
               {listItems}
            </ul>
        </div>
    )
}

export default FooterCommonComponent;
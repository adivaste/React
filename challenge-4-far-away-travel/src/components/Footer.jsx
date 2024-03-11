import React from "react";

const Footer = ({items}) => {

    const totalItems = items.length;
    const packedItems = items.filter(item => item.isPacked).length;
    const percentagePacked = ((packedItems/totalItems)*100).toFixed(0);

    return (
        <div className="bg-green-200 h-16 text-xl flex justify-center items-center absolute bottom-0 left-0 w-full">
            <p>You have <b>{totalItems}</b> items out of which <b>{packedItems}</b> are packed, which is <b>{percentagePacked}%</b> </p>
        </div>
    )
}

export default Footer;
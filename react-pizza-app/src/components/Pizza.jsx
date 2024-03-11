import React from "react";

const Pizza = (props) =>{

    const {name, ingredients, photoName, price, soldOut} = props.data;

    return (
        <div className={` ${soldOut ? "sold-out" : ""} `} style={{ display : "flex", alignItems : "center", width: "400px"}}>
            <img width="100px" height="100px" src={photoName} alt="New " />
            <div style={{padding : "0px 10px"}}>
                <h3>{name}</h3>
                <p>{ingredients} </p>
                <h4>{price}</h4>
                <h4> {soldOut ? "SOLD OUT" : "AVAILABLE"} </h4>
            </div>
        </div>
    )
}

export default Pizza;
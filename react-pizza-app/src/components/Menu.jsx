import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "../data.js"

const Menu = () => {

    return (
        <main>
            <h2 style={{ margin : "30px 50%" }}>Menu</h2>
            <div className="menu">
                {pizzaData.map(item => {
                    return(
                        <Pizza key={item.name} data={item} />
                    )
                })}
            </div>
        </main>
    )
}

export default Menu;
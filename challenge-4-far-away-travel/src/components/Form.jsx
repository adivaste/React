import React, { useState } from "react";

const Form = ({setItems}) => {

    const [travelItemCount, setTravelItemCount] = useState(1);
    const [travelItem, setTravelItem] = useState("");

    function handleCountChange(e){
        setTravelItemCount(Number(e.target.value));
    }

    function handleItemInputChange(e){
        setTravelItem(e.target.value);
    }

    function handleSubmitAction(e){
        e.preventDefault();
        setItems(prev => [...prev, {name : travelItem, count : travelItemCount, isPacked : false, id: new Date().getMilliseconds() }]);
        
        // Reset the form
        setTravelItemCount(1);
        setTravelItem("");
    }

    return ( 
        <form onSubmit={e => handleSubmitAction(e)} action="" style={{ color  :"#404040", fontSize :"18px", fontWeight : "500" }} className="bg-[#FEFBF6] p-6 flex justify-center">
            
            {/* Item count */}
            <label htmlFor="travelItemCount" className="mx-2 text-xl">Count Of Items</label>
            <select name="travelItemCount" id="travelItemCount" className="rounded-md mx-2 border-[1.8px]" value={travelItemCount} onChange={e => handleCountChange(e)}>
                {Array.from({length : 10}, (v, i) => i+1).map(item => (<option key={item} value={item}>{item}</option> ))}
            </select>

            <label className="mx-2 text-xl" htmlFor="travelItem">Travel Item </label>
            <input type="text" id="travelItem" placeholder="Item name" value={travelItem} onChange={e => handleItemInputChange(e)} className="rounded-md mx-1 px-3 border-[1.8px]" />
            <input type="submit" value="Add Item" className="mx-4 border-[1.8px] rounded-md px-2 bg-white"/>
        </form>
    )
}

export default Form;
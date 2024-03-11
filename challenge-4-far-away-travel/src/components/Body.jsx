import React, { useState } from "react";

const Body = ({items, setItems}) => {

    const [sortedData, setSortedData] = useState([...items]);
    const [sortedOption, setSortedOption] = useState("insertion");

    function handleDeletion(deletionIndex){
        setItems(prev => {
            var newData = prev.filter((item, index) => index !== deletionIndex);
            return newData;
        })
        sortData();
    }

    function handleIsPackedState(modificationIndex){
        setItems(prev => {
            var newData = prev.map((item, index) => {
                if (modificationIndex == index){
                    const tempData = {...item, isPacked : !item.isPacked};
                    return tempData;
                }
                return item;
            })
            return newData;
        })
        sortData();
    }

    function handleSortOption(e){
        setSortedOption(e.target.value);
        sortData();
    }

    function sortData(){
        setItems(prev => {
            var newSorted = [...prev];
            if (sortedOption === "itemName") {
                newSorted.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortedOption === "status") {
                newSorted.sort((a, b) => (a.isPacked ? 1 : -1) - (b.isPacked ? 1 : -1));
            }
            else{
                newSorted.sort((a, b) => b.name.localeCompare(a.name));
            }
            return newSorted;
        })
    }

    
    if(items.length == 0){
        return <div className="text-xl text-center w-full font-medium text-stone-700 p-10"> No Items Added into list ! </div>
    }

    return (
        <div className="h-96 flex-col flex justify-between">
            <div className="grid grid-cols-4 gap-4 p-8 text-center bg-[#FEFBF6]">
            { items.map((item, index) => 
                <div key={index} className="flex justify-between rounded-md px-4 py-2 border-2 border-slate-200">
                    <span className={`cursor-pointer  ${item.isPacked ? "line-through" : "" } font-medium text-lg`} onClick={() => handleIsPackedState(index)}>{item.name} ({item.count})</span>
                    <span className="cursor-pointer" onClick={() => handleDeletion(index)}>❌</span>
                </div>)
             }
            </div>
            <div className="flex justify-center items-center gap-3">
                <select className="bg-red-200 p-1 rounded-md text-lg" name="sortBy" id="sortBy" value={sortedOption} onChange={e => handleSortOption(e)}>
                    <option className="bg-white" value="insertion">Sort by Insert Order</option>
                    <option className="bg-white" value="itemName">Sort by Item Name</option>
                    <option className="bg-white" value="status">Sort by Status</option>
                </select>
                <input className="bg-red-200 text-lg p-1 px-2 rounded-md" type="reset" value="Reset" />
            </div>
        </div>
    )
}

export default Body;
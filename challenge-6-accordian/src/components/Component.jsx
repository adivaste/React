import React from "react";

export default function Component({openAccordianId, data, setOpenAccordianId}){

    const {id, question, answer} = data;
    const isOpen = openAccordianId === id;

    function handleOnClick(){
        if (id == openAccordianId) setOpenAccordianId(null);
        else setOpenAccordianId(id);    
    }

    return(
        <div className="flex flex-col justify-center items-center bg-zinc-800 w-2/3 mx-auto my-2 rounded-md overflow-hidden duration-200 transition-all">
            <div className="px-4 w-full flex justify-between items-center question cursor-pointer duration-200 transition-all" onClick={() => handleOnClick()}>
                <span className="text-zinc-100 text-xl text-left"> <span>{id}</span> {question} </span>
                <span className="p-2 text-zinc-100"> 
                    { isOpen ? "-" : "+"} 
                </span>
            </div>
            <div className={`transition-all overflow-hidden px-2 duration-200 answer ${isOpen ? "h-full py-2 opacity-100" : "h-0 opacity-0" } bg-green-300 w-full`} >
                {answer}
            </div>
        </div>
    )
}
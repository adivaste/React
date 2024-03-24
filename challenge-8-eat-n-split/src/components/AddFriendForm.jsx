import { useState } from "react"

export default function AddFriendForm({isFriendPopUpOpen, setFriendsData, setIsFriendUpOpen}){

    const [friendName, setFriendName] = useState("");

    function handleSubmitAction(){
        setFriendsData(prev => {
            const finalData = {
                ...prev,
                [Object.keys(prev).length + 1] : {
                    id: Object.keys(prev).length + 1,
                    name: friendName,
                    currentMoneyStatus: 0,
                    transactions: []
                },
            }
            return finalData;
        })
        setIsFriendUpOpen(false);
    }

    return (
        <div className={`transition-all duration-400 w-full h-full justify-center items-center absolute backdrop-blur-sm flex bg-blackOpacity ${isFriendPopUpOpen ? "z-10 opacity-100" : "-z-10 opacity-0" }`}>
            
            {/* Wrapper for Title and Inputs */}
            <div className={`split-bill bg-zinc-800 text-zinc-50 transition-all duration-200 rounded-lg p-4 px-8 scale-95 ${isFriendPopUpOpen ? "scale-100" : "" } `}>
                
                {/* Title */}
                <h1 className="split-bill-title text-center text-3xl p-2">Add New Friends Here </h1>

                {/* Input Wrapper */}
                <div className="split-bill-inputs mt-8 flex flex-col gap-4 justify-center">

                    {/* List of inputs */}
                    <div className="flex justify-between items-center gap-x-56">
                        <label className="text-xl " htmlFor="friendName"> Friend Name </label>
                        <input onChange={(e) => setFriendName(e.target.value)}  value={friendName} placeholder="Enter Name" className="px-4 py-1 text-lg rounded-md w-40 text-zinc-800" type="text" name="friendName" id="friendName" />
                    </div>
              
                    <div onClick={() => handleSubmitAction()} className="flex justify-between  items-center mt-4">
                        <span></span>
                        <button className="px-4 py-1 text-lg rounded-md w-42 bg-white text-zinc-800 font-medium">Add Friend</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
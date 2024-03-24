import { useState } from "react"

export default function SplitBillForm({isPopUpOpen, userID, friendsData, setFriendsData, setIsPopUpOpen}){

    const userName = friendsData[userID]?.name;
    const [formData, setFormData] = useState({
        bill : 0,
        description : "",
        yourExpense : 0,
        friendsExpense : 0,
        payer : "you"
    })

    function getCurrentDate(){
        const today = new Date();

        // Get the year, month, and day components of the current date
        const year = today.getFullYear(); // Get the year (YYYY)
        const month = today.getMonth() + 1; // Get the month (0-11, add 1 to get 1-12)
        const day = today.getDate(); // Get the day of the month (1-31)

        // Format the date components as a string
        const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
        return formattedDate;
    }

    function handleSubmitAction(){
        const finalData = [
            ...friendsData[userID]["transactions"],
            {
                id : 2000 + friendsData[userID]["transactions"].length,
                time : getCurrentDate(),
                amount : formData.bill,
                isPaidByMe : formData.payer === "you",
                mySplittedAmount : formData.yourExpense,
                description : formData.description
            }
        ];

        const finalAmount = formData.payer === "you" ? Number(friendsData[userID].currentMoneyStatus) + Number(formData.friendsExpense) : Number(friendsData[userID].currentMoneyStatus) - Number(formData.yourExpense);

        setFriendsData((prev) => {
            const data =  {...prev, 
                [userID] : {
                    ...prev[userID],
                    transactions : finalData,
                    currentMoneyStatus : finalAmount
                },
            };
            return data;
        })
        setIsPopUpOpen(false);
    }


    return (
            <div className={`transition-all duration-400 w-full h-full justify-center items-center absolute backdrop-blur-sm flex bg-blackOpacity ${isPopUpOpen ? "z-10 opacity-100" : "-z-10 opacity-0" }`}>
                
                {/* Wrapper for Title and Inputs */}
                <div className={`split-bill bg-zinc-800 text-zinc-50 transition-all duration-200 rounded-lg p-4 px-8 scale-95 ${isPopUpOpen ? "scale-100" : "" } `}>
                    
                    {/* Title */}
                    <h1 className="split-bill-title text-center text-3xl p-2">Split the bill with {userName} </h1>

                    {/* Input Wrapper */}
                    <div className="split-bill-inputs mt-8 flex flex-col gap-4 justify-center">

                        {/* List of inputs */}
                        <div className="flex justify-between items-center gap-x-56">
                            <label className="text-xl " htmlFor="billValue"> Bill Value </label>
                            <input onChange={(e) => setFormData((prev) => ({...prev, bill : e.target.value }))}  value={formData.bill} placeholder="Enter Amount" className="px-4 py-1 text-lg rounded-md w-40 text-zinc-800" type="number" name="billValue" id="billValue" />
                        </div>
                        <div className="flex justify-between items-center gap-x-56">
                            <label className="text-xl " htmlFor="description"> Description </label>
                            <input onChange={(e) => setFormData((prev) => ({...prev, description : e.target.value }))}  value={formData.description} placeholder="Enter Desc" className="px-4 py-1 text-lg rounded-md w-40 text-zinc-800" type="text" name="description" id="description" />
                        </div>
                        <div className="flex justify-between items-center ">
                            <label className="text-lg" htmlFor="yourExpense">Your Expense </label>
                            <input onChange={(e) => setFormData((prev) => ({...prev, yourExpense : e.target.value }))}  value={formData.yourExpense} placeholder="Enter Amount" className="px-4 py-1 text-lg rounded-md w-40 text-zinc-800" type="number" name="yourExpense" id="yourExpense" />
                        </div>
                        <div className="flex justify-between items-center ">
                            <label className="text-lg" htmlFor="userExpense">{userName}'s Expense </label>
                            <input onChange={(e) => setFormData((prev) => ({...prev, friendsExpense : e.target.value }))}  value={formData.friendsExpense} placeholder="Enter Amount" className="px-4 py-1 text-lg rounded-md w-40 text-zinc-800" type="number" name="userExpense" id="userExpense" />
                        </div>
                        <div className="flex justify-between items-center ">
                            <label className="text-lg" htmlFor="payer">Who is paying the bill ? </label>
                            <select onChange={(e) => setFormData((prev) => ({...prev, payer : e.target.value }))} value={formData.payer} placeholder="Enter Amount" className="px-4 py-1 text-lg rounded-md w-40 text-zinc-800" type="number" name="payer" id="payer" >
                                <option value="you"> You </option>
                                <option value={userName}> {userName} </option>
                            </select>
                        </div>
                        <div onClick={() => handleSubmitAction()} className="flex justify-between  items-center mt-4">
                            <span></span>
                            <button className="px-4 py-1 text-lg rounded-md w-42 bg-white text-zinc-800 font-medium">Split Bill</button>
                        </div>

                    </div>

                </div>

            </div>
    )
}
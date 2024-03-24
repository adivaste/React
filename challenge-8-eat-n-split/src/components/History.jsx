export default function History({
        friendsData,
        selectedUserID,
    }){
    
    let userTransactions = [];
    if (selectedUserID != null){
        userTransactions = friendsData[selectedUserID]["transactions"];
    }

    return(
        <div className="history-card-wrapper bg-zinc-100 w-full h-full overflow-y-auto px-8">
            <h1 className="text-4xl font-semibold text-center py-8">History</h1>
            
            {userTransactions.length > 0 ?
            userTransactions.map( (transaction, index) =>
                <div key={index} className="history-card flex items-center justify-between transition-all duration-200  px-4 hover:bg-zinc-200  ">
                    <div className="text-zinc-800 flex-none w-[5rem] overflow-x-auto font-semibold text-lg cursor-pointer text-opacity-95 history-select py-1 px-1 rounded-md">
                        {index }
                    </div>
                    <div className="text-zinc-600 flex-none w-[7rem] overflow-x-auto font-semibold text-lg cursor-pointer text-opacity-95 history-select py-1 px-1 rounded-md">
                        {transaction.id }
                    </div>
                    <div className="text-zinc-500 flex-none w-[8rem] font-semibold text-lg cursor-pointer text-opacity-95 history-select p-1 rounded-md">
                    {transaction.time }
                    </div>
                    <div className="history-info flex-grow p-2 px-4 font-medium text-lg">
                         {transaction.description}
                    </div>
                    <div className="text-zinc-500 text-right flex-none w-[5rem] font-semibold text-xl cursor-pointer text-opacity-95 history-select py-1 rounded-md">
                        { "$" + `${transaction.amount}`}
                    </div>
                </div>
            )
            : 
            <div className="text-center">
                <h1 className="text-xl py-4">There is no History ! Make a Payment </h1>
            </div>
            }
        </div>
    )
}

export default function Friends({friendsData, selectedUserID, setSelectedUserID}){

    return(

        <div className="h-full w-full overflow-hidden border-r-2 border-r-zinc-300 bg-zinc-100">
            
            {/* Title */}
            <h1 className="text-4xl bg-slate-100 font-semibold px-6 py-8">Friends</h1>

            {/* History */}
            <div className="friend-card-wrapper bg-zinc-100 w-full pl-1 overflow-y-auto">
                {Object.keys(friendsData).map((key, index) =>
                    <div key={index} onClick={()=> setSelectedUserID(friendsData[key].id)} className={`friend-card ${ friendsData[key].id == selectedUserID ? "border-l-emerald-500 bg-zinc-300" : "border-l-slate-100" } flex items-center hover: border-l-4 cursor-pointer transition-all duration-200 px-6 hover:bg-zinc-200`}>
                        <div className="friend-avatar pr-3">
                            <img className="w-12 h-12 rounded-full" src={`https://i.pravatar.cc/200?img=1${index}`} alt="" />
                        </div>
                        <div className="friend-info py-2 px-1 pr-8 mx-3">
                            <p className="text-xl">{friendsData[key].name}</p>
                            <p className="text-lg opacity-70 overflow-scroll no-scrollbar">
                            {friendsData[key].currentMoneyStatus === 0 ?
                                <span className="text-gray-600">You are equal !</span>
                                : friendsData[key].currentMoneyStatus < 0 ?
                                <span className="text-red-600">You ows ${Math.abs(friendsData[key].currentMoneyStatus)} to {friendsData[key].name}. </span>
                                : <span className="text-emerald-600">{friendsData[key].name} ows ${Math.abs(friendsData[key].currentMoneyStatus)} to you. </span>
                             } 
                            </p>
                        </div>
                        {/* <div onClick={()=> setSelectedUserID(item.id)} className="text-slate-50 cursor-pointer text-opacity-95 friend-select text-md py-1 px-4 text-base bg-zinc-800 rounded-md">
                            Select
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    )
}

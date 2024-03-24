import './App.css';
import Friends from './components/Friends';
import SplitBillForm from './components/SplitBillForm';
import History from './components/History';
import { useState } from 'react';
import { friendsPaymentData } from './constants';
import AddFriendForm from './components/AddFriendForm';

function App() {

  const [isPopUpOpen,setIsPopUpOpen] = useState(false);
  const [isFriendPopUpOpen,setIsFriendUpOpen] = useState(false);
  const [selectedUserID, setSelectedUserID] = useState(null);
  const [friendsData, setFriendsData] = useState(friendsPaymentData);

  function handleOnClickSplit(){
    if(selectedUserID != null){
      setIsPopUpOpen(prev => !prev);
    }
  }

  return (


    <div className="App flex w-full h-full overflow-hidden">

          {/* Friends list */}
          <div className='friends flex-none w-fit'>
              <Friends friendsData={friendsData} selectedUserID={selectedUserID} setSelectedUserID={setSelectedUserID} />
          </div>

          {/* History and splitting pop up */}
          <div className='splitBillForm bg-slate-100 flex-grow flex justify-center items-center relative'>

              {/* Show initially */}
              <History friendsData={friendsData} selectedUserID={selectedUserID} />

              {/* Show only when below split button is clicked */}
              <SplitBillForm 
                isPopUpOpen={isPopUpOpen}
                userID={selectedUserID}
                setFriendsData={setFriendsData}
                friendsData={friendsData}
                setIsPopUpOpen={setIsPopUpOpen}
              />

              <AddFriendForm 
                isFriendPopUpOpen={isFriendPopUpOpen}
                setIsFriendUpOpen={setIsFriendUpOpen}
                setFriendsData={setFriendsData}
              />

              {/* Button to toogle state of above pop up */}
              <div className='flex gap-2 px-4 absolute bottom-4 right-0 '>
                <button onClick={() => handleOnClickSplit()} className='z-10 splitButton  font-normal text-xl bg-zinc-800 text-white p-1 px-4 rounded-md bottom-6 right-10'>
                    {isPopUpOpen ? "Close" : "Split"}
                </button>

                <button onClick={() => setIsFriendUpOpen(prev => !prev)} className='z-10 splitButton  font-normal w-fit text-nowrap text-xl bg-zinc-800 text-white p-1 px-4 rounded-md bottom-6 right-10'>
                    Add Friend
                </button>          
              </div>

          </div>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import BillInput from "./components/BillInput";
import SelectPercentage from './components/SelectPercentage';
import TotalBill from './components/TotalBill';
import Button from './components/Button';

function App() {

  const [bill, setBill] = useState(0);
  const [personalTipPercentage, setPersonalTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);
  const [billPaid, setbillPaid] = useState(false);

  function handleOnChangeBill(e){
    setBill(Number(e.target.value));
  }

  function handleOnClickReset(){
    setBill(0);
    setPersonalTipPercentage(0);
    setFriendTipPercentage(0);
  }

  function handleOnClickPay(){
    setbillPaid(prev => !prev);
  }

  return (
    <div className="App w-full h-full">
       
      <div className='bg-zinc-800 w-full h-full flex justify-center items-center flex-col gap-4'>
        
        {/* Title */}
        <Title />

        {/* Bill Input  */}
        <BillInput bill={bill} handleOnChangeBill={handleOnChangeBill} />

        {/* Select Percentage */}
        <SelectPercentage userTipPercentage={personalTipPercentage} setUserTipPercentage={setPersonalTipPercentage}>
          How much did you like the service ? 
        </SelectPercentage>

        <SelectPercentage userTipPercentage={friendTipPercentage} setUserTipPercentage={setFriendTipPercentage}>
          How much did your friend like the service ?
        </SelectPercentage>

        {/* Total Bill */}
        <TotalBill bill={bill} personalTipPercentage={personalTipPercentage} friendTipPercentage={friendTipPercentage}/>

        
        {/* Buttons */}
          <div className='flex items-center justify-between w-7/12 mt-10 px-2'>
              <Button buttonType={"submit"} handleOnClickButton={handleOnClickPay} billPaid={billPaid}  > Pay </Button>
              <Button buttonType={"reset"} handleOnClickButton={handleOnClickReset} > Reset </Button>
          </div>
      </div>
    </div>
  );
}

export default App;

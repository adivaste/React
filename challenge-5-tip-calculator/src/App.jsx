import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [bill, setBill] = useState(null);
  const [personalTipPercentage, setPersonalTipPercentage] = useState(0);
  const [friendTipPercentage, setFriendTipPercentage] = useState(0);
  const [billPaid, setbillPaid] = useState(false);

  const personalTip = (personalTipPercentage*bill/100);
  const friendTip = (friendTipPercentage*bill/100);
  const tip = (( personalTip + friendTip )/2).toFixed(2);
  const totalAmount = (Number(tip) + Number(bill)).toFixed(2);

  function handleOnChangeBill(e){
    setBill(Number(e.target.value));
  }

  function handleOnChangePersonalTip(e){
    setPersonalTipPercentage(Number(e.target.value));
  }

  function handleOnChangeFriendTip(e){
    setFriendTipPercentage(Number(e.target.value));
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
        
        <h1 className='text-center text-5xl text-slate-50 font-bold mb-12'>Tip Calculator 💰</h1>

        <div className='flex items-center justify-between w-7/12'>
          <label htmlFor="bill" className='text-2xl text-slate-100 font-medium'>Enter you lunch Bill  </label>
          <input value={bill} onChange={e => handleOnChangeBill(e)} className='mx-4 text-2xl w-56 outline-none px-2 rounded-md py-1' type="number" name="bill" id="bill" /> 
        </div>

        <div className='flex items-center justify-between w-7/12'>
          <label className='text-2xl text-slate-100 font-medium'>How much did you like the service ? </label>
          <select value={personalTipPercentage} onChange={e => handleOnChangePersonalTip(e)} className='mx-4 text-2xl w-56 outline-none px-2 rounded-md py-1' type="number" name="bill" id="bill"> 
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was ok (5%)</option>
            <option value={10}>It was good (10%)</option>
            <option value={20}>Amazing (20%)</option>
          </select>
        </div>

        <div className='flex items-center justify-between w-7/12'>
          <span className='text-2xl text-slate-100 font-medium'>How much did your friend like the service ?</span>
          <select value={friendTipPercentage} onChange={e => handleOnChangeFriendTip(e)} className='mx-4 text-2xl w-56 outline-none px-2 rounded-md py-1' type="number" name="bill" id="bill"> 
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was ok (5%)</option>
            <option value={10}>It was good (10%)</option>
            <option value={20}>Amazing (20%)</option>
          </select>
        </div>

        
        <div className='flex items-center justify-between w-7/12 mt-8'>
          <h1 className='text-3xl text-slate-50'> Total amount to pay : </h1>
          <span className='text-3xl text-slate-50 px-4'>$ {totalAmount} </span>
        </div>

        <div className='flex items-center justify-between w-7/12 '>
          <h1 className='text-xl text-slate-50'></h1>
          <span className='text-xl text-zinc-400 px-4'> $ {bill} ( Bill ) + $ {tip} ( Tip ) </span>
        </div>

        <div className='flex items-center justify-between w-7/12 mt-10 px-2'>
            <button className='bg-slate-200 rounded-md py-1 px-4 text-2xl' type='submit' onClick={handleOnClickPay}> {billPaid ? "Paid" : "Pay"} </button>
            <button className='bg-slate-200 rounded-md py-1 px-4 text-2xl' type='reset' onClick={handleOnClickReset}>Reset</button>
        </div>

      </div>
    </div>
  );
}

export default App;

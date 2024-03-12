export default function TotalBill({bill, personalTipPercentage, friendTipPercentage}){

    const personalTip = (personalTipPercentage*bill/100);
    const friendTip = (friendTipPercentage*bill/100);
    const tip = (( personalTip + friendTip )/2).toFixed(2);

    const totalAmount = (Number(tip) + Number(bill)).toFixed(2);

    return (
        <>
            <div className='flex items-center justify-between w-7/12 mt-8'>
                <h1 className='text-3xl text-slate-50'> Total amount to pay : </h1>
                <span className='text-3xl text-slate-50 px-4'>$ {totalAmount} </span>
            </div>

            <div className='flex items-center justify-between w-7/12 '>
                <h1 className='text-xl text-slate-50'></h1>
                <span className='text-xl text-zinc-400 px-4'> $ {bill} ( Bill ) + $ {tip} ( Tip ) </span>
            </div>
        </>
    )
}
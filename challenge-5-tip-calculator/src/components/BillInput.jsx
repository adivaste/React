export default function BillInput({bill, handleOnChangeBill}){
    return (
        <div className='flex items-center justify-between w-7/12'>
            <label htmlFor="bill" className='text-2xl text-slate-100 font-medium'>Enter you lunch Bill  </label>
            <input value={bill} onChange={e => handleOnChangeBill(e)} className='mx-4 text-2xl w-56 outline-none px-2 rounded-md py-1' type="number" name="bill" id="bill" /> 
        </div>
    )
}
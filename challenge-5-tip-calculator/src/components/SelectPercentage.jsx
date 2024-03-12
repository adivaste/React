export default function SelectPercentage({userTipPercentage, setUserTipPercentage, children}){
    return (
        <div className='flex items-center justify-between w-7/12'>
            <label className='text-2xl text-slate-100 font-medium'>{children}</label>
            <select value={userTipPercentage} onChange={e => setUserTipPercentage(Number(e.target.value))} className='mx-4 text-2xl w-56 outline-none px-2 rounded-md py-1' type="number" name="bill" id="bill"> 
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was ok (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Amazing (20%)</option>
            </select>
      </div>

    )
}
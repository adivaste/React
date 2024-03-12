export default function Button({handleOnClickButton, buttonType, billPaid, children}){
    return (
            <button
                className='bg-slate-200 rounded-md py-1 px-4 text-2xl' 
                type={buttonType}
                onClick={() => handleOnClickButton()}
            >
                 {buttonType === "reset" ? children :
                    billPaid ? "Paid" : "Pay"
                 } 
            </button>
    )    
}
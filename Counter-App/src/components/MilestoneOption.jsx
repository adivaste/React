const MilestoneOption = ({milestone, setMilestone}) => {

    return(
        <>
        <p style={{ textAlign:"center", padding:"10px" }}>Set The Target </p>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
            <input className="inputBox" type="number" value={milestone.value} onChange={(e) => setMilestone({status : false, value:e.target.value}) } />
            <button className="button" onClick={() => setMilestone({status : true, value:milestone.value})} > Set </button>
            <button className="button" onClick={() => setMilestone({status : false, value:0})} > Reset </button>
        </div>
        </>
    )
}

export default MilestoneOption;
import React from "react"
import "./../styles/Skill.css"

const Skill = (props) => {

    const {skill, emoji, bgColor} = props;
    const spanStyle = {
        backgroundColor : bgColor
    }

    return (
        <div className="skill" style={spanStyle}>
            {skill} 
            {emoji === "expert" && "💪" }
            {emoji === "intermediate" && "👍" }
            {emoji === "beginner" && "👶" }
         </div>
    )
}

export default Skill;
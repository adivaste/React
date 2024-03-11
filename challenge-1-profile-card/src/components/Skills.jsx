import React from "react";
import Skill from "./Skill";

const Skills = () => {

    const skillsData = [
        { skill: "HTML", emoji: "expert", bgColor: "#27272a" },
        { skill: "Javascript", emoji: "expert", bgColor: "#dc2626" },
        { skill: "CSS", emoji: "expert", bgColor: "#166534" },
        { skill: "Git and Github", emoji: "intermediate", bgColor: "#854d0e" },
        { skill: "Figma", emoji: "intermediate", bgColor: "#1e40af" },
        { skill: "Web Design", emoji: "expert", bgColor: "#4338ca" },
        { skill: "React", emoji: "beginner", bgColor: "#5b21b6" },
        { skill: "Java", emoji: "beginner", bgColor: "#0f766e" }
      ];

    return(
        <div className='skills'>
            {skillsData.map( item => <Skill skill={item.skill} emoji={item.emoji} bgColor={item.bgColor} />)}
        </div>
    )
}

export default Skills;
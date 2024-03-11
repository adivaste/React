import React from "react";
import AvatarURL from "./../images/avatar.avif"


const Avatar = () => {
    return (
        <div style={{ backgroundImage : `url(${AvatarURL})` }} className='imageWrapper'></div>
    )
}

export default Avatar;
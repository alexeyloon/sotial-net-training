import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://look.com.ua/pic/201209/1600x900/look.com.ua-22548.jpg' />
            </div>
            <div className= {classes.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
}

export default ProfileInfo;
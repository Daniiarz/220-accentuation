import React from "react";
import style from "./icon.module.css"

function Delete() {
    const [color, setColor] = React.useState("#ff5454")

    return (
        <div onMouseEnter={e =>{e.preventDefault();setColor("#b20303")}} onMouseLeave={e =>{e.preventDefault();setColor("#ff5454")}} className={style.deleteCont}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="100%" height="100%" viewBox="0 0 24 24">
                <path fill={color} d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
            </svg>
        </div>
    )
}

export default Delete;
import React from "react";
import style from "./constructor.module.css"

function Theme(onSave) {

    const themeList = [
        {id: 1, color: {name:"color1", color:"#fff5f2"}},
        {id: 2, color: {name:"color2", color: "#fff7b4"}},
        {id: 3, color: {name:"color3", color:"#b5ffb4"}},
        {id: 4, color: {name: "color4",color:"#abff88"}},
        {id: 5, color: {name: "color5",color:"rgb(255,200,152)"}},
        {id: 6, color: {name: "color6",color:"rgb(255,187,183)"}},
        {id: 7, color: {name: "color7",color:"rgb(233,225,225)"}},
    ];

    return (
        <div className={style.themeCont}>
            {
                themeList.map(cell => (
                    <label key={cell.id} className={style.label}>
                        <input style={{display: `none`}} onChange={() => onSave.onSave(cell.color)} type="radio"
                               name={"theme"}/>
                        <div style={{background: `${cell.color.color}`}} className={style.editorColor}></div>
                    </label>
                ))
            }
        </div>
    )
}

export default Theme;

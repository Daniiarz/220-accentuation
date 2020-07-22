import React from "react";
import style from "./templates.module.css";

function Grayscale() {
    return (
        <div className={style.templateCont}>
            <iframe className={style.template} src={"http://grayscale.220-accentuation.co/"} frameBorder="0">
            </iframe>
        </div>
    )
}

export default Grayscale;
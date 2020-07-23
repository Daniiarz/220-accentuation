import React from "react";
import style from "./templates.module.css";

function Template(props) {
    return (
        <div className={style.templateCont}>
            <iframe className={style.template} src={`${props.location.templateProps}`} frameBorder="0">
            </iframe>
        </div>
    )
}
export  default Template;
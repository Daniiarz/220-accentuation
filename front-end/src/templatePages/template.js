import React from "react";
import style from "./templates.module.css";

function Template(props) {
    console.log(props.location.templateProps)
    return (
        <div className={style.templateCont}>
            <iframe className={style.template} src={`${props.location.templateProps}`} frameBorder="0">
            </iframe>
        </div>
    )
}

export default Template;
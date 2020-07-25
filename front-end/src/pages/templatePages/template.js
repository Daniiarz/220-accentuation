import React from "react";
import style from "./templates.module.css";
import {useSelector} from "react-redux";

function Template(props) {
    const token = window.localStorage.getItem("token")
    return (
        <div className={style.templateCont}>
            <iframe
                onLoad={e =>
                    window.frames[0].postMessage(token, props.location.templateProps)
                }
                className={style.template}
                src={`${props.location.templateProps}`} frameBorder="0">
            </iframe>
        </div>
    )
}

export default Template;
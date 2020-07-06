import React from "react";
import "./send-btn.css";
import {NavLink} from "react-router-dom";

function SendBtn({id, onClick}) {
    return (
        <NavLink
            to={`/${id}/constructor`}
            className={"link"}
            exact={true}
        >
            <button
                onClick={onClick}
                className={'btn'}
            >
                send
            </button>
        </NavLink>
    )
}

export default SendBtn;

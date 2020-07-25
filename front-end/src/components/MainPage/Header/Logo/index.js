import React from "react";
import style from "./logo.module.css";
import {NavLink} from "react-router-dom";

function Logo() {
    const scrollToTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    return (
        <div onClick={scrollToTop}>
            <NavLink className={style.link} to={"/"} exact={true}>
                <p className={style.p}><b>220</b> accentuation</p>
            </NavLink>
        </div>
    );
}

export default Logo;

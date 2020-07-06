import React from "react";
import style from "./header.module.css"
import Logo from "./Logo";
import Nav from "./Nav";

function Head() {
    return (
        <div className={style.mainCont}>
           <Logo/>
           <Nav/>
        </div>
    )
}

export default Head;

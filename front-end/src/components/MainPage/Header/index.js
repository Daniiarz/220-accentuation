import React from "react";
import style from "./header.module.css";
import Logo from "./Logo";
import Navv from "./Nav";

function Head () {
  return (
    <div className={style.mainCont}>
      <Logo/>
      <Navv/>
    </div>
  );
}

export default Head;

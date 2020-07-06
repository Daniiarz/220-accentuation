import React from "react";
import style from "./desc.module.css";

function Desc() {
    return (
        <div className={style.mainCont}>
            <div>
                <h1 className={style.h1}>
                    Lorem ipsum dolor sit amet
                </h1>
                <p className={style.p}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolor ea fugit in ipsam laudantium.
                </p>
            </div>
        </div>
    )
}

export default Desc;

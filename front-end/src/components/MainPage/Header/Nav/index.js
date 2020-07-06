import React from "react";
import style from "./nav.module.css";
import {NavLink} from "react-router-dom"

function Nav() {
    const navArray = [
        {
            id:1, to:"/", text: "ourtext"
        },
        {
            id:2, to:"/", text: "ourtext"
        },
        {
            id:3, to:"/", text: "ourtext"
        },
        {
            id:4, to:"/", text: "ourtext"
        },
    ]

    return (
        <div className={style.mainCont}>
            {
                navArray.map( (c) =>
                    <div key={c.id} className={style.cell}>
                        <NavLink
                            to={"/"}
                            className={style.link}
                            // activeClassName={style.active}
                            exact
                        >{c.text}</NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Nav;

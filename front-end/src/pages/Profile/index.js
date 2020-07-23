import React from "react";
import style from "./profile.module.css";
import Head from "../../components/MainPage/Header";
import plus from "../../images/plus-circle-outline.png"
import {NavLink} from "react-router-dom";

function Profile() {
    return (
        <div className={style.mainCont}>
            <Head/>
            <div className={style.header}>
                <div className={style.name}>
                    <h3 className={style.h3}>Daniyar</h3>
                    <h3 className={style.h3}>Pidor</h3>
                </div>
                <div className={style.slogan}>
                    <h4>
                        So easy even a caveman can do it with <b>220 accentuation</b>
                    </h4>
                </div>
            </div>
            <p className={style.ms}>my sites</p>
            <div className={style.sitesCont}>
                <iframe src="http://sdas.220-accentuation.co" frameborder="0"></iframe>
                <NavLink className={style.link} to={"/templates"} exact={true}>
                    <img className={style.plus} src={plus} alt=""/>
                    create site
                </NavLink>
            </div>
        </div>
    )
}

export default Profile;
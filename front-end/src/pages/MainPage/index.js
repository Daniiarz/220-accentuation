import React from "react";
import style from "./main-cont.module.css";
import Head from "../../components/MainPage/Header";
import Desc from "../../components/MainPage/Description";
import Contact from "../../components/MainPage/Contact";
import CreateCard from "../../components/MainPage/CreateCard";

function MainContent() {
    return (
        <div className={style.mainCont}>
            <Head/>
            <Desc/>
            <CreateCard/>
            <Contact/>
        </div>
    )

}

export default MainContent;

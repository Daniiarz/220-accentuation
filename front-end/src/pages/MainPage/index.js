import React from "react";
import style from "./main-cont.module.css";
import Head from "../../components/MainPage/Header";
import Desc from "../../components/MainPage/Description";
import Contact from "../../components/MainPage/Contact";
import About from "../../components/MainPage/About";

function MainContent () {
  return (
    <div>
      <div className={style.header}>
        <Head/>
        <Desc/>
      </div>
      <div className={style.body}>
        <About/>
        <Contact/>
      </div>
    </div>
  );
}

export default MainContent;

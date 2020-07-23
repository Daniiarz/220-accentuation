import React from "react";
import style from "./contact.module.css";
import github from "../../../images/github.png";
import phone from "../../../images/phone.png";
import telegram from "../../../images/Telegram_Messenger.png";

function Contact() {
    return (
        <div id={"contact"} className={style.mainCont}>
            <h2 className={style.h2}><b>220</b> accentuation <b>team</b></h2>
            <div className={style.cont}>
                <div className={style.text}>
                    <h4>a little bit more about 220 accentuation</h4>
                    <p>
                        Our mission is to help people freely create own web site, without outside developers
                    </p>
                </div>
                <div className={style.front}>
                    <h3 className={style.h3}>Front-end:</h3>
                    <p className={style.p}>Adberg</p>
                    <a target="_blank" rel="noopener noreferrer" className={style.link} href="https://github.com/adberg2001"><img src={github} alt=""/></a>
                    <a target="_blank" rel="noopener noreferrer" className={style.link} href="https://t.me/daniiarz"><img src={telegram} alt=""/></a>
                    <a target="_blank" rel="noopener noreferrer" className={style.link} href="tel:+996220201111"><img src={phone} alt=""/></a>
                </div>
                <div className={style.back}>
                    <h3 className={style.h3}>Back-end:</h3>
                    <p className={style.p}>Daniar Flash</p>
                    <a target="_blank" rel="noopener noreferrer" className={style.link} href="https://github.com/Daniiarz"><img src={github} alt=""/></a>
                    <a target="_blank" rel="noopener noreferrer" className={style.link} href="https://t.me/daniiarz"><img src={telegram} alt=""/></a>
                    <a target="_blank" rel="noopener noreferrer" className={style.link} href="tel:+996220201111"><img src={phone} alt=""/></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;

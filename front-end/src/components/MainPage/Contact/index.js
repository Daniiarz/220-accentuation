import React from "react";
import style from "./contact.module.css";

function Contact() {
    return (
        <div className={style.mainCont}>
            <h2 className={style.h2}><b>220</b> accentuation</h2>
            <div className={style.table}>
                <div className={style.cell}>
                    <h3 className={style.h3}><b>call</b> to us</h3>
                    <div className={style.title}>
                        <p className={style.p}>+996 555 555 555</p>
                        <p className={style.p}>+996 777 777 777</p>
                    </div>
                </div>
                <div className={style.cell}>
                    <h3 className={style.h3}><b>e</b>-mail</h3>
                    <div className={style.title}>
                        <p className={style.p}>qwerty@mail.com</p>
                        <p className={style.p}>asdfgh@mail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

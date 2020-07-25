import React, {useEffect, useState} from "react";
import style from "./auth.module.css";
import CloseIcon from "../../images/close.png";
import imageAuth from "../../images/lucas-sankey-bXq8pVfP-fY-unsplash.jpg"
import {useSelector} from "react-redux";
import LoginAuth from "./LoginAuth";
import RegAuth from "./RegistrationAuth";

function Authorization(prop) {
    const fail = useSelector(state => state.login.fail)
    useEffect(() => {
        if (!fail) prop.onClick("none")
    }, [fail])

    const [iconColor, setIconColor] = useState("#b5b5b5");
    const [switchAuth, setAuth] = useState(true);

    const handleClose = (e) => {
        e.preventDefault();
        prop.onClick("none")
    }

    const handleSwitch = (e, boolean) => {
        e.preventDefault();
        setAuth(boolean)
    }
    return (
        <div className={style.mainCont} style={{display: `${prop.display}`}}>
            <div className={style.titleCont}>
                    <h3 className={style.h3}>
                        Build your own site <b>now.</b>
                    </h3>
                {
                    switchAuth
                        ? <LoginAuth  onClick={handleSwitch}/>
                        : <RegAuth switch={setAuth} onClick={handleSwitch}/>
                }
            </div>
            <div className={style.imageCont}>
                <img className={style.img} src={imageAuth} alt=""/>
            </div>
            <button className={style.closeBtn} onClick={(e) => handleClose(e)}
                    onMouseEnter={() => setIconColor("#FFFDFFFF")} onMouseLeave={() => setIconColor("#b5b5b5")}>
                <img style={{backgroundColor: `${iconColor}`}} className={style.closeBtnImg} src={CloseIcon} alt=""/>
            </button>
        </div>
    )
}

export default Authorization;
import React, {useState, useEffect} from "react";
import style from "./auth.module.css";
import visible from "../../images/visible.png";
import hide from "../../images/hide.png";
import {useDispatch, useSelector} from "react-redux";
import {addLoginData, sendLoginPost, checkVerifyAuth} from "../../store/actions";

function LoginAuth(prop) {
    const dispatch = useDispatch();
    const {email, password, fail} = useSelector(state => state.login);
    // const verifyFail = useSelector(state => state.verifyAuth.fail)

    const [loginBtn, setDisableLogBtn] = useState(false);
    const [logPassword, setLogPass] = useState({display: "none", vis: "password"});

    useEffect(() => {
       if (fail === false) dispatch(checkVerifyAuth())
    },[fail])

    const handleLogin = (e) => {
        e.preventDefault();
        setDisableLogBtn(true)
        setTimeout(() => {
            setDisableLogBtn(false);
        }, 5000)
        dispatch(sendLoginPost({email: email, password: password}));
    }

    const handleChangeLogin = (e) => dispatch(addLoginData({name: e.target.name, data: e.target.value}));

    return (
        <div className={style.fieldCont}>
            <div className={style.fields}>
                <input name={"email"} value={email} onChange={(e) => handleChangeLogin(e)} type="text"
                       placeholder={"email"}/>
                <div className={style.password}>
                    <input name={"password"} value={password} onChange={(e) => handleChangeLogin(e)}
                           type={logPassword.vis} placeholder={"password"}/>
                    <img className={style.passVis}
                         style={logPassword.display === "none" ? {display: "block"} : {display: "none"}}
                         onClick={(e) => {
                             e.preventDefault();
                             setLogPass({display: "block", vis: "text"})
                         }}
                         src={visible} alt=""/>
                    <img className={style.passVis}
                         style={{display: logPassword.display}}
                         onClick={(e) => {
                             e.preventDefault();
                             setLogPass({display: "none", vis: "password"})
                         }}
                         src={hide} alt=""/>
                </div>
            </div>
            <p className={style.error}>{fail === 401 ? "wrong login or password" : ""}</p>
            <button disabled={loginBtn} onClick={e => handleLogin(e)} className={style.login}>login</button>
            <button onClick={(e) => prop.onClick(e, false)} className={style.switch}>Create account?
            </button>
        </div>
    )
}

export default LoginAuth;
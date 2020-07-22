import React, {useState, useEffect} from "react";
import style from "./auth.module.css";
import visible from "../../images/visible.png";
import hide from "../../images/hide.png";
import {useDispatch, useSelector} from "react-redux";
import {addRegData, sendRegPost} from "../../store/actions";

function RegAuth(prop) {
    const dispatch = useDispatch();
    const {first_name, last_name, email, password, success, error} = useSelector(state => state.regis)
    const [regPassword1, setRegPass1] = useState({display: "none", vis: "password"});
    const [regPassword2, setRegPass2] = useState({display: "none", vis: "password"});
    const [passText1, setPassText1] = useState("");
    const [regBtn, setDisableRegBtn] = useState(false);
    const [errorText, setErrorText] = useState("");

    const handleChangeReg = (e) => {
        dispatch(addRegData({
            name: e.target.name,
            data: e.target.value
        }));
    }

    useEffect(() => {
        if (success)prop.switch(true)
    }, [success])
    useEffect(() => {
        if (error===true) setErrorText("this password is too common.")
    }, [error])

    const handleRegistration = (e) => {
        e.preventDefault();
        if(passText1 !== password) {
            setErrorText("password are not matching")
        }else {
            setErrorText("");
            setDisableRegBtn(true);
            setTimeout(() => {
                setDisableRegBtn(false);
            }, 4000);
            dispatch(
                sendRegPost({first_name:first_name ,last_name:last_name ,email: email, password: password})
            )
        }
    }

    return (
        <div className={style.fieldCont}>
            <div className={style.fields}>
                <input name={"first_name"} value={first_name} onChange={(e) => handleChangeReg(e)} type="text"
                       placeholder={"Name"}/>
                <input type="text" name={"last_name"} value={last_name} onChange={(e) => handleChangeReg(e)}
                       placeholder={"Last name"}/>
                <input type="email" name={"email"} value={email} onChange={(e) => handleChangeReg(e)}
                       placeholder={"Email"}/>
                <div className={style.password}>
                    <input value={passText1} onChange={e => setPassText1(e.target.value)} type={regPassword1.vis} placeholder={"password1"}/>
                    <img className={style.passVis}
                         style={regPassword1.display === "none" ? {display: "block"} : {display: "none"}}
                         onClick={(e) => {
                             e.preventDefault();
                             setRegPass1({display: "block", vis: "text"})
                         }}
                         src={visible} alt=""/>
                    <img className={style.passVis}
                         style={{display: regPassword1.display}}
                         onClick={(e) => {
                             e.preventDefault();
                             setRegPass1({display: "none", vis: "password"})
                         }}
                         src={hide} alt=""/>
                </div>
                <div className={style.password}>
                    <input name={"password"} value={password} onChange={(e) => handleChangeReg(e)}
                           type={regPassword2.vis} placeholder={"password2"}/>
                    <img className={style.passVis}
                         style={regPassword2.display === "none" ? {display: "block"} : {display: "none"}}
                         onClick={(e) => {
                             e.preventDefault();
                             setRegPass2({display: "block", vis: "text"})
                         }}
                         src={visible} alt=""/>
                    <img className={style.passVis}
                         style={{display: regPassword2.display}}
                         onClick={(e) => {
                             e.preventDefault();
                             setRegPass2({display: "none", vis: "password"})
                         }}
                         src={hide} alt=""/>
                </div>
            </div>
            <p className={style.error}>{errorText}</p>
            <button disabled={regBtn} onClick={e => handleRegistration(e)} className={style.login}>registration</button>
            <button onClick={(e) => prop.onClick(e, true)} className={style.switch}>Has an account?</button>
        </div>
    )
}

export default RegAuth;
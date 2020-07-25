import React from "react";
import style from "./profile.module.css";
import Head from "../../components/MainPage/Header";
import plus from "../../images/plus-circle-outline.png"
import {NavLink, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {checkVerifyAuth, clearLoginData, getProfile} from "../../store/actions";

function Profile() {
    const dispatch = useDispatch();
    const [hasSites, setSites] = React.useState(false)
    const access = useSelector(state => state.verifyAuth.access);
    const profileData = useSelector(state => state.profileReducer.profile)
    React.useEffect(() => {
        dispatch(checkVerifyAuth());
        dispatch(getProfile());
        setSites(false)
    }, [access]);
    console.log(hasSites, profileData)
    const history = useHistory();
    const handleLogOut = (e) => {
        e.preventDefault();
        window.localStorage.clear();
        dispatch(checkVerifyAuth());
        dispatch(clearLoginData())
        history.push("/");
    }
    return (
        <div className={style.mainCont}>
            <Head/>
            <div className={style.header}>
                <div className={style.name}>
                    <h3 className={style.h3}>{profileData.first_name}</h3>
                    <h3 className={style.h3}>{profileData.last_name}</h3>
                </div>
                <div className={style.slogan}>
                    <h4>
                        So easy even a caveman can do it with <b>220 accentuation</b>
                    </h4>
                </div>
            </div>
            <p className={style.ms}>
                my sites
                <button onClick={e=>handleLogOut(e)} className={style.logOut}>log out?</button></p>
            <div className={style.sitesCont}>
                {profileData.sites
                        ? profileData.sites.length
                        ? profileData.sites.map( (el, index) => (
                            <iframe key={index} src={`http://${el.name}.220-accentuation.co`} frameBorder="0">
                            </iframe>))
                        : <p className={style.error}>you don't have any created sites</p>
                    :<p className={style.error}>loading ...</p>
                }
                <NavLink className={style.link} to={profileData.first_name?"/templates":"/profile"} exact={true}>
                    <img className={style.plus} src={plus} alt=""/>
                    create site
                </NavLink>
            </div>
        </div>
    )
}

export default Profile;
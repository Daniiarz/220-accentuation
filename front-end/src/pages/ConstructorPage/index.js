import React from "react";
import style from "./constructor.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkVerifyAuth} from "../../store/actions";
import Authorization  from "../Auth";

function Constructor() {
    const [visibility, setVisibility] = React.useState("none")

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(checkVerifyAuth())
    }, []);

    const {access} = useSelector(state => state.verifyAuth);

    const handleOpenAuth = (e) => {
        e.preventDefault();
        if(!access) setVisibility("flex")
        console.log(access)
    };

    const templateList = [
        {id: 1, link: "http://grayscale.220-accentuation.co/", to: "/templates/grayscale"},
        {id: 2, link: "http://grayscale.220-accentuation.co/", to: "/templates/grayscale"},
        {id: 3, link: "http://grayscale.220-accentuation.co/", to: "/templates/grayscale"},
    ]

    return (
        <div className={style.mainCont}>
            <h2 className={style.h2}>
                Select template that you like.
            </h2>
            <div className={style.templateCont}>
                {
                    templateList.map(t => (
                        <div key={t.id} className={style.templateCellCont}>
                            {
                                access
                                    ? <NavLink
                                        to={t.to}
                                        className={style.templateLink}
                                        exact={true}>
                                        go to edit template
                                    </NavLink>
                                    : <a onClick={(e) => handleOpenAuth(e)} className={style.templateLink}>
                                        go to edit template
                                    </a>
                            }
                            <iframe className={style.template}
                                    src={t.link} frameBorder="0">
                            </iframe>
                        </div>
                    ))
                }
            </div>
            <Authorization onClick={setVisibility} display={visibility}/>
        </div>
    );
}

export default Constructor;

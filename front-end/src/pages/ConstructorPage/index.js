import React, {useState ,useEffect} from "react";
import style from "./constructor.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkVerifyAuth} from "../../store/actions";
import Authorization  from "../../components/Auth";
import back from "../../images/back.png"

function Constructor() {
    const [visibility, setVisibility] = useState("none")
    const [templatesList, rawTemplates] = useState([])
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(checkVerifyAuth())
    }, []);

    const {access} = useSelector(state => state.verifyAuth);

    const handleOpenAuth = (e) => {
        e.preventDefault();
        if(!access) setVisibility("grid");
    };

    useEffect(() => {
        fetch("http://www.220-accentuation.co/api/constructor/templates/")
            .then((response)=> {
                if (!response.ok) throw response;
                return response.json();
            }).then((templates) => {
            rawTemplates(templates)
        }).catch((err) => {
            if (typeof err.text === 'function') {
                err.text().then(errorMessage => {
                    console.log(errorMessage);
                });
            } else {
                console.log(err)
            }
        })
    }, [])
    return (
        <div className={style.mainCont}>
            <h2 className={style.h2}>
                <NavLink className={style.backLink} to={"/"} exact={true}><img src={back} alt=""/></NavLink>
                Select template that you like.
            </h2>
            <div className={style.templateCont}>
                {
                    templatesList.map((t, index )=> (
                        <div key={index} className={style.templateCellCont}>
                            {
                                access
                                    ? <NavLink
                                        to={{
                                            pathname: `/templates/constructor`,
                                            templateProps: t.constructor_link,
                                        }}
                                        className={style.templateLink}
                                        exact={true}>
                                        go to edit template
                                    </NavLink>
                                    : <a onClick={(e) => handleOpenAuth(e)} className={style.templateLink}>
                                        go to edit template
                                    </a>
                            }
                            <iframe className={style.template} src={t.sample_link} frameBorder="0">
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

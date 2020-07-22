import React from "react";
import style from "./constructor.module.css";
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setReadiness} from "../../store/actions/action";
import body from "../../store/reducers/body";

function Table(onSave) {
    const id = useSelector(state => state.api.id);
    const dispatch = useDispatch();
    const handleAlert = (e, name) => {
        e.preventDefault();
        alert("you definitely want to edit");
        dispatch(setReadiness(name, false))
    };

    const list = [
        {id: 1, content: "#", area: "logo", to: `/${id}/logo`},
        {id: 2, content: "#", area: "nav", to: `/${id}/nav`},
        {id: 3, content: "#", area: "body", to: `/${id}/body`},
        {id: 4, content: "#", area: "footer", to: `/${id}/footer`},
    ];

    const readiness = useSelector(state => state.readiness);
    const bodyLayout = useSelector(state => state);

    return (
        <div className={style.tableCont}>
            <div className={style.table}>
                {
                    list.map(el => (
                        <div key={el.id}
                             style={{gridArea: el.area, background: `${onSave.onSave.bg.color}`}}
                             className={style.cell}>
                            {
                                readiness[el.area]
                                    ?
                                    <NavLink
                                        to={el.to}
                                        className={style.link}
                                        exact={true}
                                    >
                                        <div onClick={e => handleAlert(e, el.area)}
                                             className={style[el.area]}>
                                            {readiness[el.area].text.map((input, index) => (
                                                <div
                                                    // style={bo}
                                                    className={style[`${el.area}-cont`]}
                                                    key={index}>
                                                    {
                                                        input.map((spring, index) => (
                                                            <p  key={index}
                                                                className={readiness[el.area].style}
                                                            >
                                                                {spring}
                                                            </p>
                                                        ))
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                    </NavLink>
                                    : <NavLink
                                        to={el.to}
                                        className={style.link}
                                        exact={true}
                                    ><b>E</b>DIT</NavLink>
                            }
                        </div>
                    ))
                }
            </div>

            <button
                onClick={onSave.onSave.fun}
                className={style.sendBtn}>
                create page
            </button>
        </div>
    )
}

export default Table

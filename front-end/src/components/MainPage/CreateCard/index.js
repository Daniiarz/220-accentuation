import React from "react";
import {NavLink} from "react-router-dom";
import style from "./create-card.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { setId } from '../../../store/actions/action';

function CreateCard() {
    const id = useSelector(state => state.api.id);
    const dispatch = useDispatch();
    const addId = (i) => dispatch(setId(i));

    const [title, setTitle] = React.useState("");
    const [name, setName] = React.useState("");
    const [displayStyle, setStyle] = React.useState(true);

    const cardInputList = [
        {id: 1, value: title, placeholder: "Page name", fun: setTitle},
        {id: 2, value: name, placeholder: "Page address", fun: setName}
    ];
    const handleClick = (e) => {
        e.preventDefault();
        setStyle(false);
        fetch('http://localhost:8080/page', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: `${title}`,
                name: `${name}`,
            }),
        }).then((response => response.json()))
            .then(json => {
                addId(json.id);
                console.log(json)
            })
    };
    return (
        <div className={style.mainCont}>
            <div className={style.cardInput}>
                {
                    cardInputList.map((i) => (
                        <input key={i.id}
                               value={i.value}
                               placeholder={i.placeholder}
                               onChange={e => i.fun(e.target.value)}
                               type="text"/>
                    ))
                }
            </div>

            <p className={style.p}>
                {(name !== "" && title !== "")
                    ? ""
                    : "fill in the line"}
            </p>
            {(name !== "" && title !== "")
                ?
                <div>
                    <button
                        className={style.btn}
                        style={!displayStyle ? {display: "none"} : {display: "block"}}
                        onClick={handleClick}>
                        confirm
                    </button>
                    <NavLink
                        style={displayStyle ? {display: "none"} : {display: "block"}}
                        to={`/${id}/constructor`}
                        className={style.link}
                        exact={true}>
                        <b>Create</b> own card
                    </NavLink>
                </div>
                : <a className={style.link}><b>Create</b> own card</a>}
        </div>
    )
}

export default  CreateCard;

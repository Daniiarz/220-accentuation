import React from "react";
import "../construcor.css";
import style from "./nav.module.css"
import SendBtn from "../../atoms/SendBtn";
import {useSelector, useDispatch} from "react-redux";
import {addNav, setReadiness} from "../../../store/actions/action";


function ResultNav(onSave) {
    const [text1, typeText1] = React.useState("YOUR TEXT");
    const [text2, typeText2] = React.useState("YOUR TEXT");
    const [text3, typeText3] = React.useState("YOUR TEXT");
    const [href1, typeHref1] = React.useState("");
    const [href2, typeHref2] = React.useState("");
    const [href3, typeHref3] = React.useState("");

    const {colorClass, sizeClass} = onSave.onSave;

    const inputList = [
        {id: 1, fun: typeText1, hrefFun: typeHref1},
        {id: 2, fun: typeText2, hrefFun: typeHref2},
        {id: 3, fun: typeText3, hrefFun: typeHref3},
    ];

    const linkList = [
        {id: 1, text: text1, href: href1},
        {id: 2, text: text2, href: href2},
        {id: 3, text: text3, href: href3},
    ];
    const dispatch = useDispatch();
    const id = useSelector(state => state.api.id);

    const handleClick = () => {
        dispatch(addNav({
            input1: {
                text: text1,
                href: href1
            },
            input2: {
                text: text2,
                href: href2
            },
            input3: {
                text: text3,
                href: href3
            },
            style: `${onSave.onSave.colorClass} ${onSave.onSave.sizeClass} a`
        }));
        dispatch(setReadiness(
            "nav",
            {
                text: [[text1], [text2], [text3]],
                style: `${onSave.onSave.colorClass} ${onSave.onSave.sizeClass} a`
            }
        ));
    };
    return (
        <div className={style.result}>
            <div className={style.inputsCont}>
                {
                    inputList.map((i) => (
                        <div className={style.inputCont} key={i.id}>
                            <input
                                onInput={(e) => i.fun(e.target.value)}
                                type="text"
                                placeholder={"type link name"}
                                className={style.input}
                            />
                            <input
                                onInput={(e) => i.hrefFun(e.target.value)}
                                type="text"
                                placeholder={"set your link"}
                                className={style.input}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={style.title}>
                {
                    linkList.map((l) => (
                        l.href !== ""
                            ? <a
                                key={l.id}
                                href={l.href}
                                className={`${colorClass} ${sizeClass} ${style.a}`}
                                target="_blank" rel="noopener noreferrer"
                            >
                                {l.text}
                            </a>
                            : <p
                                key={l.id}
                                className={`${colorClass} ${sizeClass} ${style.a}`}
                            >
                                {l.text}
                            </p>


                    ))
                }
            </div>
            <SendBtn id={id} onClick={handleClick}/>
        </div>
    )
}

export default ResultNav;

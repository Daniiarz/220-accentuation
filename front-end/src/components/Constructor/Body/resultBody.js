import React from "react";
import style from "./body.module.css";
import SendBtn from "../../atoms/SendBtn";
import {useSelector, useDispatch} from "react-redux";
import {addBody, setReadiness, setBodyLayout} from "../../../store/actions/action";

function ResultBody(onSave) {
    const [textVisibility1, setVisibility1] = React.useState("block");
    const [textVisibility2, setVisibility2] = React.useState("block");
    const [textVisibility3, setVisibility3] = React.useState("block");
    const [textVisibility4, setVisibility4] = React.useState("block");
    const [textVisibility5, setVisibility5] = React.useState("block");
    const [textVisibility6, setVisibility6] = React.useState("block");

    const {colorClass, sizeClass, textLayout} = onSave.onSave;
    const {
        typeText11, text11,
        typeText12, text12,
        typeText21, text21,
        typeText22, text22,
        typeText31, text31,
        typeText32, text32
    } = onSave.onSave;

    const textList = [
        {
            id: 1,
            cellPosition: textLayout === "normal" ? "normal" : "reverse",
            input1: typeText11,
            input2: typeText12,
            p1: text11,
            p2: text12,
            visibility1: textVisibility1,
            visibility2: textVisibility2,
            visibilityFun1: setVisibility1,
            visibilityFun2: setVisibility2,
        },
        {
            id: 2,
            cellPosition: textLayout === "normal" ? "reverse" : "normal",
            input1: typeText21,
            input2: typeText22,
            p1: text21,
            p2: text22,
            visibility1: textVisibility3,
            visibility2: textVisibility4,
            visibilityFun1: setVisibility3,
            visibilityFun2: setVisibility4,
        },
        {
            id: 3,
            cellPosition: onSave.onSave.textLayout === "normal" ? "normal" : "reverse",
            input1: typeText31,
            input2: typeText32,
            p1: text31,
            p2: text32,
            visibility1: textVisibility5,
            visibility2: textVisibility6,
            visibilityFun1: setVisibility5,
            visibilityFun2: setVisibility6,
        },
    ];

    const dispatch = useDispatch();
    const id = useSelector(state => state.api.id);

    const handleClick = () => {
        dispatch(addBody({
            text1: `<p class=\`${colorClass} ${sizeClass} ${textLayout}\`>${text11}</p>`,
            text2: `<p class=\`${colorClass} ${sizeClass} ${textLayout}\`>${text12}</p>`,
            text3: `<p class=\`${colorClass} ${sizeClass} ${textLayout}\`>${text21}</p>`,
            text4: `<p class=\`${colorClass} ${sizeClass} ${textLayout}\`>${text22}</p>`,
            text5: `<p class=\`${colorClass} ${sizeClass} ${textLayout}\`>${text31}</p>`,
            text6: `<p class=\`${colorClass} ${sizeClass} ${textLayout}\`>${text32}</p>`,
            style: `${textLayout}`
        }));
        dispatch(setReadiness(
            "body", {
                text: [
                    [
                        text11,
                        text12,
                    ],
                    [
                        text21,
                        text22,
                    ],

                    [
                        text31,
                        text32,
                    ],
                ],
                style: `${colorClass} ${sizeClass}`,
                layout: textLayout === "normal"
                    ? ["m", "r", "r", "m", "m", "r"]
                    : ["r", "m", "m", "r", "r", "m"]
            }
        ));
        dispatch(setBodyLayout({layout: textLayout}))
    };

    return (
        <div className={style.result}>
            {
                textList.map(t => (
                    <div key={t.id} className={style.cell}>
                        <div className={
                            t.cellPosition === "normal"
                                ? `normal ${style.titleCont}`
                                : `reverse ${style.titleCont}`
                        }>
                            <div style={t.visibility1 === "block" ? {display: "none"} : {display: "flex"}}
                                 className={style.inputCont}>
                                <input value={t.p1} className={`${colorClass} ${sizeClass} ${style.input}`}
                                       onChange={e => t.input1(e.target.value)} type="text"/>
                                <button className={style.btn} onClick={e => {
                                    e.preventDefault();
                                    t.visibilityFun1("block")
                                }}>done
                                </button>
                            </div>
                            <p style={t.visibility1 === "block"
                                ? {display: t.visibility1}
                                : {display: "none"}}
                               onClick={() => t.visibilityFun1("none")}
                               className={
                                   `${onSave.onSave.colorClass}
                                    ${onSave.onSave.sizeClass}
                                     ${style.p}`
                               }>{t.p1}</p>
                        </div>
                        <div className={
                            t.cellPosition === "normal"
                                ? `reverse ${style.titleCont}`
                                : `normal ${style.titleCont}`
                        }>
                            <div style={t.visibility2 === "block" ? {display: "none"} : {display: "flex"}}
                                 className={style.inputCont}>
                                <input value={t.p2} className={`${colorClass} ${sizeClass} ${style.input}`}
                                       onChange={e => t.input2(e.target.value)} type="text"/>
                                <button className={style.btn} onClick={e => {
                                    e.preventDefault();
                                    t.visibilityFun2("block")
                                }}>done
                                </button>
                            </div>
                            <p style={t.visibility2 === "block"
                                ? {display: t.visibility2}
                                : {display: "none"}}
                               onClick={() => t.visibilityFun2("none")} className={
                                `${colorClass}
                                    ${sizeClass} ${style.p}`
                            }>{t.p2}</p>
                        </div>
                    </div>
                ))
            }
            <SendBtn id={id} onClick={handleClick}/>
        </div>
    )
}

export default ResultBody;

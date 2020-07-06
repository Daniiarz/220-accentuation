import React from "react";
import "../construcor.css";
import style from "./logo.module.css";
import SendBtn from "../../atoms/SendBtn";
import {useSelector, useDispatch} from "react-redux";
import {addLogo, addImage, setReadiness} from "../../../store/actions/action";
import EditorLogo from "./editor";

function Logo() {
    const [styleColor, setColorClass] = React.useState("black");
    const [styleSize, setSizeClass] = React.useState("medium");
    const [styleLayout, setTextLayout] = React.useState("left");

    const [text, typeText] = React.useState("YOUR TEXT");
    const dispatch = useDispatch();
    const id = useSelector(state =>state.api.id);

    const handleClick = () => {
        dispatch(addLogo({
            input1: {text: text},
            style: `${styleColor} ${styleSize} ${styleLayout}`}));
        dispatch(setReadiness(
            "logo",
            {
                text: [[text]],
                style: `${styleColor} ${styleSize} ${styleLayout}`}
            ))
    };
    return (
        <div className={"mainCont"}>
            <EditorLogo onSave={{setColorClass, setSizeClass, setTextLayout}}/>
            <div className={style.result}>
                <div className={style.inputsCont}>
                    <input onInput={
                        (e) =>
                            typeText(e.target.value)}
                           type="text"
                           placeholder={"TYPE YOUR TEXT"}
                           className={style.input}
                    />
                    <form
                        action=""
                        method={'POST'}
                        encType={'multipart/form-data'}
                        className={style.form}
                    >
                        <label>
                            <input
                                onChange={e=>dispatch(addImage(e.target.value))}
                                style={{display: "none"}}
                                type="file"
                                accept="image/x-png,,image/jpeg"/>
                            <p className={style.p}>set image</p>
                            <input className={style.submit} type={"submit"}/>
                        </label>
                    </form>
                </div>
                <div className={style.title}>
                    <p className={`${styleColor} ${styleSize} ${styleLayout}`}>{text}</p>
                </div>
                <SendBtn id={id} onClick={handleClick}/>
            </div>
        </div>
    )
}

export default Logo;

import React from "react";
import style from "./footer.module.css";
import EditorFooter from "./editorFooter";
import {useSelector, useDispatch} from "react-redux";
import { addFooter, setReadiness } from "../../../store/actions/action";
import SendBtn from "../../atoms/SendBtn";

function Footer() {
    const [vis1, setVis1] = React.useState("block");
    const [vis2, setVis2] = React.useState("block");

    const [colorClass, setColorClass] = React.useState("black");
    const [sizeClass, setSizeClass] = React.useState("medium");
    const [textLayout, setTextLayout] = React.useState("left");
    const [address, typeAddress] = React.useState("type your address");
    const [contacts, typeContacts] = React.useState("type your contact");

    const dispatch = useDispatch();
    const id = useSelector(state => state.api.id);

    const handleClick = () => {
      dispatch(addFooter({
          text: [address,contacts],
          style: `${colorClass} ${sizeClass} ${textLayout}`
      }));
      dispatch(setReadiness("footer", {
          text: [[address], [contacts]],
          style: `${colorClass} ${sizeClass} ${textLayout}`
      }))
    };

    return (
        <div className={"mainCont"}>
            <EditorFooter onSave={{setColorClass, setSizeClass, setTextLayout}}/>

            <div className={style.result}>
                <div className={style.inputs}>
                    <div style={vis1 === "block" ? {display: "none"} : {display: "block"}}
                         className={style.text1}>
                        <input value={address}
                               onChange={(e) => typeAddress(e.target.value)}
                               type="text"
                               placeholder={"type your text"}
                        />
                        <button onClick={e => {
                            e.preventDefault();
                            setVis1("block")
                        }}
                        >done
                        </button>
                    </div>
                    <p onClick={e => {
                        e.preventDefault();
                        setVis1("none")
                    }}
                       style={{display: vis1}}
                       className={`${colorClass} ${sizeClass} ${textLayout}`}
                    >{address}</p>
                    <div style={vis2 === "block" ? {display: "none"} : {display: "block"}}
                         className={style.text1}>
                        <input value={contacts}
                               onChange={(e) => typeContacts(e.target.value)}
                               type="text"
                               placeholder={"type your text"}
                        />
                        <button onClick={e => {
                            e.preventDefault();
                            setVis2("block")
                        }}
                        >done
                        </button>
                    </div>
                    <p onClick={e => {
                        e.preventDefault();
                        setVis2("none")
                    }}
                       style={{display: vis2}}
                       className={`${colorClass} ${sizeClass} ${textLayout}`}
                    >{contacts}</p>

                </div>
                <SendBtn id={id} onClick={handleClick}/>
            </div>
        </div>
    )
}

export default Footer;

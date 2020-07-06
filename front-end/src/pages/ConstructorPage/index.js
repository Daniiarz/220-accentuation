import React from "react";
import style from "./constructor.module.css";
import {useSelector} from "react-redux";
import Theme from "./theme";
import Table from "./table";

function Constructor() {
    const state = useSelector(state => state);

    const [bg, setBg] = React.useState({name: "color2",color:"#fff7b4"});

    const sendingObj = {
        logo: state.logo.logo,
        nav: state.nav.nav,
        body: state.body.body,
        footer: state.footer.footer,
        style: `mainCont ${bg.name}`
    };

    const handleSend = (e) => {
        console.log(sendingObj)
        e.preventDefault();
        fetch('http://localhost:8080/page', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sendingObj
            }),
        }).then((response => response.json()))
            .then(json => {
                console.log(json.text)
            })
    };

    return (
        <div className={style.mainCont}>
            <h2 className={style.h2}>
                Lorem ipsum dolor sit amet.
            </h2>
            <div className={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, rerum?
            </div>
            <div className={style.editor}>
                <Theme onSave={setBg}/>
                <Table onSave={{fun: handleSend, bg}}/>
            </div>
        </div>
    )
}

export default Constructor;

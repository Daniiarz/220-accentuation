import React from "react";
import style from "./constructor.module.css";
import {useSelector} from "react-redux";
import Theme from "./theme";
import Table from "./table";

function Constructor() {
    const state = useSelector(state => state);

    const [bg, setBg] = React.useState({name: "color2",color:"#fff7b4"});

    const sendingObj = {
        meta: {
          mainContStyle: bg
        },
        header: {
            brandTittle: state.logo.logo.tittle,
            menuOption1: state.nav.nav.menuOption1,
            menuOption2: state.nav.nav.menuOption2,
            menuOption3: state.nav.nav.menuOption3
        },
        body: {
            bodyText1: state.body.body.text1,
            bodyText2: state.body.body.text2,
            bodyText3: state.body.body.text3,
            bodyText4: state.body.body.text4,
            bodyText5: state.body.body.text5,
            bodyText6: state.body.body.text6,
            bodyStyle: state.body.body.style
        },
        footer: {
            address: state.footer.footer.address,
            contacts: state.footer.footer.contacts,
        }
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

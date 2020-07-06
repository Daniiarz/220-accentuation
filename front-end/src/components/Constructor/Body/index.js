import React from "react";
import style from "./body.module.css";
import EditorBody from "./editorBody";
import ResultBody from "./resultBody";

function Body() {

    const [colorClass, setColorClass] = React.useState("black");
    const [sizeClass, setSizeClass] = React.useState("medium");
    const [textLayout, setTextLayout] = React.useState("normal");
    const [text11, typeText11] = React.useState("TYPE YOUR TEXT");
    const [text12, typeText12] = React.useState("TYPE YOUR TEXT");
    const [text21, typeText21] = React.useState("TYPE YOUR TEXT");
    const [text22, typeText22] = React.useState("TYPE YOUR TEXT");
    const [text31, typeText31] = React.useState("TYPE YOUR TEXT");
    const [text32, typeText32] = React.useState("TYPE YOUR TEXT");

    return (
        <div className={"mainCont"}>
            <EditorBody onSave={{setColorClass, setSizeClass, setTextLayout}}/>
            <ResultBody onSave={{
                text11, typeText11,
                text12, typeText12,
                text21, typeText21,
                text22, typeText22,
                text31, typeText31,
                text32, typeText32,
                colorClass,
                sizeClass,
                textLayout
            }}/>
        </div>

    )
}

export default Body;

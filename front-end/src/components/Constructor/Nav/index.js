import React from "react";
import "../construcor.css";
import EditorNav from "./editorNav";
import ResultNav from "./resultNav";


function Nav() {
    const [colorClass, setColorClass] = React.useState("black");
    const [sizeClass, setSizeClass] = React.useState("medium");

    return (
        <div className={"mainCont"}>
            <EditorNav onSave={{setColorClass, setSizeClass}}/>
            <ResultNav onSave={{colorClass, sizeClass}}/>
        </div>
    )
}

export default Nav;

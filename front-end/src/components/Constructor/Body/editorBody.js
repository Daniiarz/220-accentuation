import React from "react";
import "../construcor.css";

function EditorBody(onSave) {
    const bodyFooterList = [
        {
            id: 1,
            h2: "select font color",
            name: "logoColor",
            fun: onSave.onSave.setColorClass,
            input: [
                {id: 1, value: "red", text: "red"},
                {id: 2, value: "green", text: "green"},
                {id: 3, value: "gray", text: "gray"},
                {id: 4, value: "black", text: "black"}
            ]
        },
        {
            id: 2,
            h2: "select font size",
            name: "logoSize",
            fun: onSave.onSave.setSizeClass,
            input: [
                {id: 1, value: "small", text: "small"},
                {id: 2, value: "medium", text: "medium"},
                {id: 3, value: "large", text: "large"}
            ]
        },
        {
            id: 3,
            h2: "set text layout",
            name: "textLayout",
            fun: onSave.onSave.setTextLayout,
            input: [
                {id: 1, value: "normal", text: "normal"},
                {id: 2, value: "reverse", text: "reverse"},
            ]
        },
    ];

    return (
        <div className={"editor"}>
            {
                bodyFooterList.map((cont) => (
                    <div key={cont.id} className={"elementType"}>
                        <div className={"cont"}>
                            <h2 className={"h2"}>{cont.h2}</h2>
                            {cont.input.map((input) => (
                                <label key={input.id}>
                                    <input
                                        value={input.value}
                                        name={cont.name}
                                        type="radio"
                                        onChange={(e) => cont.fun(e.target.value)}
                                    />
                                    <span>{input.text}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default EditorBody;

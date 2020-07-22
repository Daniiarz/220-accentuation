import React from "react";
import { NavLink } from "react-router-dom";
import style from "./create-card.module.css";

function CreateCard () {
  return (
    <div className={style.mainCont}>
      <div className={style.cont}>
        <NavLink
          to={"/templates"}
          className={style.link}
          exact={true}>
          <b>Create</b> own site
        </NavLink>
      </div>
    </div>
  );
}

export default CreateCard;

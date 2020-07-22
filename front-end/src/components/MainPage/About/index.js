import React from "react";
import style from "./about.module.css";
import img1 from "../../../images/example-scene-1.svg";
import img2 from "../../../images/example-scene-2.svg";
import img3 from "../../../images/example-scene-3.svg";

function About () {
  const aboutList = [
    {
      id: 1,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      gridArea: "leftImg",
      btnPosition: "rightBtn",
      img: img1,
      class: "img1"

    },
    {
      id: 2,
      text: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      gridArea: "rightImg",
      btnPosition: "leftBtn",
      img: img2,
      class: "img2"
    },
    {
      id: 3,
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,.",
      gridArea: "leftImg",
      btnPosition: "rightBtn",
      img: img3,
      class: "img3"
    }
  ];
  return (
    <div className={style.mainCont}>
      {
        aboutList.map(element => (
          <div key={element.id} className={style.cell}>
            <img src={element.img} className={`${style[element.class]}`} alt="photo.png"/>
            <div className={style.titleCont}>
              <p className={style.text}>
                {element.text}
              </p>
              {/* <button className={style[element.btnPosition]}> */}
              {/*    create site */}
              {/* </button> */}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default About;

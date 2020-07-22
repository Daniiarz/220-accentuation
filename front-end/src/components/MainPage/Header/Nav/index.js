import React from "react";
import style from "./nav.module.css";
import Media from "react-media";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/cjs/Navbar";
import NavDropdown from "react-bootstrap/cjs/NavDropdown";
import Nav from "react-bootstrap/cjs/Nav";

function Navv () {
  const navArray = [
    {
      id: 1, to: "/", text: "templates"
    },
    {
      id: 2, to: "/", text: "about"
    },
    {
      id: 3, to: "/", text: "contact"
    },
    {
      id: 4, to: "/", text: "authorization"
    }
  ];

  return (
    <div className={style.mainCont}>
      <Media query={{ maxWidth: 1008 }}>
        {matches =>
          matches
            ? (
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={`mr-auto ${style.navCont}`}>
                  <NavDropdown className={style.navMinCont} title={
                    <button className={style.navDropdownBtn}>menu</button>
                  } id="collasible-nav-dropdown">
                    {(
                      navArray.map(c =>
                        <NavLink
                          key={c.id}
                          to={"/"}
                          className={style.cell}
                          exact>
                          <Navbar bg="light" expand="lg">
                            <NavDropdown.Item className={style.link}>{c.text}</NavDropdown.Item>
                          </Navbar>
                        </NavLink>
                      )
                    )}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            )
            : (
              (navArray.map(c =>
                <NavLink
                  key={c.id}
                  to={"/"}
                  className={style.cell}
                  exact>
                  <Navbar className={style.link} bg="light" expand="lg">
                    {c.text}
                  </Navbar>
                </NavLink>
              ))
            )
        }
      </Media>
    </div>
  );
}

export default Navv;

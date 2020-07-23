import React, {useState} from "react";
import style from "./nav.module.css";
import Media from "react-media";
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/cjs/Navbar";
import NavDropdown from "react-bootstrap/cjs/NavDropdown";
import Nav from "react-bootstrap/cjs/Nav";
import {useSelector, useDispatch} from "react-redux";
import {checkVerifyAuth, getProfile} from "../../../../store/actions";
import Authorization from "../../../Auth";

function Navv() {
    const dispatch = useDispatch();
    const access = useSelector(state => state.verifyAuth.access);
    React.useEffect(() => {
        dispatch(checkVerifyAuth());
        dispatch(getProfile());

    }, [access]);
    const [visibility, setVisibility] = useState("none");
    const handleOpenAuth = (e) => {
        e.preventDefault();
        if (!access) setVisibility("grid");

    };

    const scrollToContact = () => {
        window.scrollTo({
            top: 3000,
            behavior: "smooth"
        });
    }
    const scrollToAbout = () => {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });
    }
    const handleOpenProfile = () => {
        console.log("it work")
    }

    const navArray = [
        {
            id: 1, to: '/templates', text: "templates", onclick: null
        },
        {
            id: 2, to: "/", text: "about", onclick: scrollToAbout
        },
        {
            id: 3, to: "/", text: "contact", onclick: scrollToContact
        },
        {
            id: 4,
            to: access ? "/profile" : "/",
            text: `${!access ? "authorization" : "profile"}`,
            onclick: !access ? handleOpenAuth : handleOpenProfile
        }
    ];

    return (
        <div className={style.mainCont}>
            <Media query={{maxWidth: 1008}}>
                {matches =>
                    matches
                        ? (
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className={`mr-auto ${style.navCont}`}>
                                    <NavDropdown className={style.navMinCont} title={
                                        <button className={style.navDropdownBtn}>menu</button>
                                    } id="collasible-nav-dropdown">
                                        {(
                                            navArray.map((c) =>
                                                (<NavLink
                                                    key={c.id}
                                                    to={c.to}
                                                    className={style.cell}
                                                    exact={true}>
                                                    <Navbar bg="light" expand="lg">z
                                                        <NavDropdown.Item onClick={c.onclick}
                                                                          className={style.link}>{c.text}</NavDropdown.Item>
                                                    </Navbar>
                                                </NavLink>)
                                            )
                                        )}
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        )
                        : (navArray.map(c => (
                            <NavLink
                                key={c.id}
                                to={c.to}
                                className={style.cell}
                                exact>
                                <Navbar onClick={c.onclick} className={style.link} bg="light" expand="lg">
                                    {c.text}
                                </Navbar>
                            </NavLink>
                        )
                        ))

                }
            </Media>
            <Authorization onClick={setVisibility} display={visibility}/>
        </div>
    );
}

export default Navv;

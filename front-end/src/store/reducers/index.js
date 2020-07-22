import { combineReducers } from 'redux'
import api from "./api";
import logo from "./logo";
import nav from "./nav";
import body from "./body";
import footer from "./footer";
import readiness from "./readiness";

export default combineReducers({
    api, logo, nav, body, footer, readiness
})

import React from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import MainContent from "./pages/MainPage";
import Body from "./components/Constructor/Body";
import Logo from "./components/Constructor/Logo";
import Nav from "./components/Constructor/Nav";
import Footer from "./components/Constructor/Footer";
import Constructor from "./pages/ConstructorPage";
import { useSelector} from "react-redux";

function App() {
    const id = useSelector(state => state.api.id);
  return (
        <BrowserRouter basename="final-project">
            <Switch>
                    <Route path={"/"} component={MainContent} exact/>
                    <Route path={`/${id}/body`} component={Body} exact/>
                    <Route path={`/${id}/logo`} component={Logo} exact/>
                    <Route path={`/${id}/nav`} component={Nav} exact/>
                    <Route path={`/${id}/footer`} component={Footer} exact/>
                    <Route path={`/${id}/constructor`} component={Constructor} exact/>
            </Switch>
        </BrowserRouter>
  );
}

export default App;

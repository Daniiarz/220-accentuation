import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContent from "./pages/MainPage";
import Constructor from "./pages/ConstructorPage";
import Template from "./pages/templatePages/template";
import Profile from "./pages/Profile";

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={MainContent} exact/>
        <Route path={"/templates"} component={Constructor} exact/>
        <Route path={"/templates/constructor"} component={Template} exact/>
        <Route path={"/profile"} component={Profile} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

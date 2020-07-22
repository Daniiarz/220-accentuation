import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContent from "./pages/MainPage";
import Constructor from "./pages/ConstructorPage";
import Template from "./templatePages/template";

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={MainContent} exact/>
        <Route path={"/templates"} component={Constructor} exact/>
        <Route path={"/templates/constructor"} component={Template} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

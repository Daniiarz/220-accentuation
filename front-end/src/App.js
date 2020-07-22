import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContent from "./pages/MainPage";
import Constructor from "./pages/ConstructorPage";
import Grayscale from "./templatePages/grayscale";

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={MainContent} exact/>
        <Route path={"/templates"} component={Constructor} exact/>
        <Route path={"/templates/grayscale"} component={Grayscale} exact/>
        <Route path={``} component={} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

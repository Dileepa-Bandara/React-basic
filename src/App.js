import React from "react";
import { data } from "./components/dataList.js";
import NavBar from "./components/NavBar";
import { Grid } from "@material-ui/core";

import HeaderCom from "./components/HeaderCom";
import HelloWorld from "./components/HelloWorld";
import "./scss/app.scss";
import FooterCom from "./components/FooterCom";
import { Route, Switch } from "react-router-dom";
import PropsCom from "./components/PropsCom.jsx";
import StateCom from "./components/StateCom.jsx";

function App() {
  console.log(data);
  return (
    <>
      <div className="container">
        <Grid container>
          <NavBar></NavBar>
        </Grid>

        <Grid container>
          <HeaderCom></HeaderCom>
        </Grid>
        <Grid container>
          <Switch>
            <Route exact path="/" component={HelloWorld}></Route>
            <Route exact path="/props" component={() => PropsCom(data)}></Route>
            <Route exact path="/state" component={StateCom}></Route>
          </Switch>
        </Grid>
        <Grid container>
          <FooterCom></FooterCom>
        </Grid>
      </div>
    </>
  );
}

export default App;

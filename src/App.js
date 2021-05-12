import React from "react";
import NavBar from "./components/NavBar";
import { Grid } from "@material-ui/core";

import HeaderCom from "./components/HeaderCom";
import HelloWorld from "./components/HelloWorld";
import "./scss/app.scss";
import FooterCom from "./components/FooterCom";

function App() {
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
          <HelloWorld></HelloWorld>
        </Grid>
        <Grid container>
          <FooterCom></FooterCom>
        </Grid>
      </div>
    </>
  );
}

export default App;

import React from "react";
import NavBar from "./components/NavBar";
import HeaderCom from "./components/HeaderCom";
import "./scss/app.scss";
import HelloWorld from "./components/HelloWorld";
import FooterCom from "./components/FooterCom";

function App() {
  return (
    <div>
      <div className="container">
        <div className="nav">
          <NavBar></NavBar>
        </div>
        <div className="header">
          <HeaderCom></HeaderCom>
        </div>
        <div className="body">
          <HelloWorld></HelloWorld>
        </div>
      </div>
      <div className="footer">
        <FooterCom></FooterCom>
      </div>
    </div>
  );
}

export default App;

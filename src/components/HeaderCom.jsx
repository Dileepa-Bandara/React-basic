import React from "react";
import "../scss/headercom.scss";

function HeaderCom() {
  return (
    <>
      <div className="header">
        <img src="./images/cat.jpg" alt="" />
        <h2> Content....</h2>
        <div className="header__list">
          <div className="list__left">
            <ul>
              <li>
                <h3>BASICS...</h3>
              </li>
              <li>
                <h5>Props</h5>
              </li>
              <li>
                <h5>States</h5>
              </li>
              <li>
                <h5>Forms</h5>
              </li>
              <li>
                <h5>Higher Order Components</h5>
              </li>
            </ul>
          </div>
          <div className="list__right">
            <ul>
              <li>
                <h3>HOOKS...</h3>
              </li>
              <li>
                <h5>useState</h5>
              </li>
              <li>
                <h5>useEffect</h5>
              </li>
              <li>
                <h5>useState</h5>
              </li>
              <li>
                <h5>useReffs</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderCom;

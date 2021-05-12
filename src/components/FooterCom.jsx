import React from "react";
import "../scss/footer.scss";
import { Button } from "@material-ui/core";

function FooterCom() {
  return (
    <div className="footer">
      <div>
        <h1>Footer 1</h1>
        <ul>
          <li>
            <a href="#">Home Page</a>
          </li>
          <li>
            <a href="#">Props</a>
          </li>
          <li>
            <a href="#">States</a>
          </li>
          <li>
            <a href="#">Forms</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>Footer 2</h1>

        <ul>
          <li>
            <a href="#">Higher Order Components</a>
          </li>
          <li>
            <a href="#">useState Hook</a>
          </li>
          <li>
            <a href="#">useEffect Hook</a>
          </li>
          <li>
            <a href="#">useContext Hook</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>Footer 3</h1>
        <ul>
          <li>
            <a href="">useRef Hook</a>
          </li>
          <li>
            <Button
              variant="contained"
              color="secondary"
              style={{ background: "red", color: "white" }}
            >
              Home
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterCom;

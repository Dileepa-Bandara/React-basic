import React from "react";
import "../scss/footer.scss";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  link: {
    color: "white",
    textDecoration: "none",

    "&:hover": {
      color: "yellow",
    },
  },
});
function FooterCom() {
  const classes = useStyles();

  return (
    <div className="footer">
      <div>
        <h1>Footer 1</h1>
        <ul>
          <li>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/props" className={classes.link}>
              Landing Page
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>Footer 2</h1>

        <ul>
          <li>
            <Link to="/state" className={classes.link}>
              Simple Counter
            </Link>
          </li>
          <li>
            <Link to="/form" className={classes.link}>
              Forms
            </Link>
          </li>
          <li>
            <Link to="/useeffect" className={classes.link}>
              Weather
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>Footer 3</h1>
        <ul>
          <li>
            <Link to="/counter" className={classes.link}>
              Counter
            </Link>
          </li>
          <li>
            <Button
              variant="contained"
              color="secondary"
              style={{ background: "red", color: "white" }}
              href="/"
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

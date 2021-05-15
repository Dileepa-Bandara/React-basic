import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  IconButton,
  Drawer,
  Card,
  CardHeader,
  makeStyles,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FastForwardIcon from "@material-ui/icons/FastForward";
import TransitEnterexitIcon from "@material-ui/icons/TransitEnterexit";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    width: "300px",
    padding: "10px",
    background: "grey",
    height: "100vh",
  },
  title: {
    color: "white",
  },
  media: {
    height: 300,
    color: "white",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    background: "black",
    color: "white",
    padding: "10px",
    marginBottom: 4,
    textAlign: "center",
  },
});

function NavBar(props) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <>
      <AppBar style={{ background: "black" }}>
        <Toolbar>
          <Grid container spacing={2} alignContent="center" alignItems="center">
            <Grid item>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon color="primary"></MenuIcon>
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h5" color="inherit">
                React Basic
              </Typography>
            </Grid>
            <Grid item style={{ marginLeft: "15px" }}>
              <Button
                variant="outlined"
                color="secondary"
                style={{ color: "white" }}
                endIcon={
                  <FastForwardIcon style={{ color: "white" }}></FastForwardIcon>
                }
              >
                Demo
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "10px" }}
              >
                Home
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)} className="drawer">
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton onClick={() => setOpen(false)}>
                <TransitEnterexitIcon />
              </IconButton>
            }
            title="Content"
            className={classes.title}
            subheader="React Basic"
          ></CardHeader>
          <CardMedia
            image="./images/cat.jpg"
            title="Content"
            className={classes.media}
          ></CardMedia>
          <CardContent className={classes.content}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/props" className={classes.link}>
              Profile(props)
            </Link>
            <Link to="/state" className={classes.link}>
              Calculator(state)
            </Link>
            <Link to="/form" className={classes.link}>
              Forms
            </Link>
            <Link to="/counter" className={classes.link}>
              Counter
            </Link>
          </CardContent>
        </Card>
      </Drawer>
    </>
  );
}

export default NavBar;

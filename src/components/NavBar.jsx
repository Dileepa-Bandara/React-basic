import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FastForwardIcon from "@material-ui/icons/FastForward";

function NavBar(props) {
  console.log(props);
  return (
    <>
      <AppBar style={{ background: "black" }}>
        <Toolbar>
          <Grid container spacing={2} alignContent="center" alignItems="center">
            <Grid item>
              <IconButton>
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;

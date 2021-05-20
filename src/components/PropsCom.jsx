import React from "react";
import "../scss/props.scss";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";

function PropsCom({ name, passion }) {
  return (
    <div className="props">
      <motion.div
        className="opacity"
        initial={{ x: -10000 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
      ></motion.div>
      <img src="./images/hand.jpg" alt="cat" />
      <motion.h1
        className="content"
        initial={{ scale: 0, color: "white", x: -1000 }}
        animate={{ color: "white", scale: 1.5, rotateZ: 360, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Hello,I'm
      </motion.h1>
      <motion.span
        initial={{ scale: 0, color: "white", x: -1000 }}
        animate={{ color: "red", scale: 1.5, rotateZ: 360, x: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          color: "red",
          marginLeft: "50px",
          fontWeight: 800,
          fontSize: "large",
          marginBottom: "10px",
        }}
      >
        {name}
      </motion.span>
      <motion.h2
        initial={{ scale: 0, color: "white", x: -1000 }}
        animate={{ color: "white", scale: 1.5, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        {passion}
      </motion.h2>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "35px" }}
      >
        View My Work
      </Button>
    </div>
  );
}

export default PropsCom;

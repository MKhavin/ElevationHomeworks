import Spam from "./Spam";
import React, { Component } from "react";

const Spamalot = () => {
  return new Array(500).fill(<Spam />);
};

export default Spamalot;

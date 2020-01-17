/* eslint-disable no-unused-vars */
import React from "react";
import classes from "./Order.css";

const order = props => (
  <div className={classes.Order}>
    <p>Ingredients: Salad (1)</p>
    <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
  </div>
);

export default order;
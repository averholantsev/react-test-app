/* eslint-disable no-unused-vars */
import React from 'react';
import classes from './MenuButton.css'

const menuButton = (props) => {
  return (
    <div className={classes.Menu} onClick={props.opened}>
      <div className={classes.Button}></div>
    </div>
  )
}

export default menuButton;

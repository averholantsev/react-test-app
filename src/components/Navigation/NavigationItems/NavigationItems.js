/* eslint-disable no-unused-vars */
import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact={true}>Burger builder</NavigationItem>
    <NavigationItem link="/checkout" exact={true}>Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
/* eslint-disable no-unused-vars */
import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Burger builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    { !props.isAuthenticated 
      ? <NavigationItem link="/auth">Authenticate</NavigationItem>
      : <NavigationItem link="/loguot">Loguot</NavigationItem>
    }
  </ul>
);

export default navigationItems;
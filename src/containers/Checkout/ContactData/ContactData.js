/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from '../../../axios-orders'

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = () => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Artem Verkholantsev",
        address: {
          street: "Permskay 30",
          zipcode: "614000",
          country: "Russian Federation"
        },
        email: "verkholantsevad@gmail.com"
      },
      deliveryMethod: "right now"
    }
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your email" />
          <input className={classes.Input} type="text" name="street" placeholder="Street" />
          <input className={classes.Input} type="text" name="postalCode" placeholder="Postal Code" />
          <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
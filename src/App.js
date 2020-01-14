import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact render={() => <BurgerBuilder />}/>
          <Route path="/checkout" render={() => <h1>Hello world!</h1>}/>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

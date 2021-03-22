import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forum from "./Pages/Forum";

class App extends Component {

  componentDidMount = async () => {
    // await API.authCheck();
  }

  render = () => {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/f" component={Forum} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </div>
    );    
  }

}

export default (App);

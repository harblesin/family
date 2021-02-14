import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './Images/homepagelogo.png';
import './App.css';
import HomePage from "./Components/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import API from "./utils/userAPI";

class App extends Component {

  componentDidMount = async () => {
    // await API.authCheck();
  }

  render = () => {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Welcome You Stupid Cunt</h4>
        </header> */}
        <Router>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </div>
    );    
  }

}

export default App;

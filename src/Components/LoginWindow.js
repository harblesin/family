import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import API from "../utils/userAPI";
import "./LoginWindow.css";
import fartSound from "../Audio/fart.wav";



class LoginWindow extends Component {
    state = {
        username: "",
        password: "",
        redirect: false
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    login = async () => {
        new Audio(fartSound).play();;
        let redirect = await API.loginUser(this.state);
        return;
    }

    componentDidUpdate = (prevState) => {
        if(this.state.redirect) {
            return <Redirect to="/home" />
        }
    }

    render = () => {
        return (
            <div id="login-window-main">
                <Row>
                    <Col xs="12">
                        <h4 id="login-window-header">Give me your info</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" onChange={this.handleChange}></input>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange} ></input>
                    </Col>                    
                </Row>
                <Row>
                    <Col xs="6">
                        <button onClick={this.login}> Login </button>
                    </Col>
                    <Col xs="6">
                        <button>Clear</button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LoginWindow;
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import API from "../utils/userAPI";
import "./LoginWindow.css";
import fartSound from "../Audio/fart.wav";
import Form from "../Components/Inputs";
import Spinner from "../Components/Spinner";
import logo from "../Images/homepagelogo.png";



class LoginWindow extends Component {
    state = {
        username: "",
        password: "",
        redirect: false,
        logginIn: false
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    login = async () => {
        this.setState({ loggingIn: true })
        new Audio(fartSound).play();;
        let redirect = await API.loginUser(this.state);
        return;
    }

    cancel = () => {
        this.setState({ userName: "", password: "", redirect: false })
    }

    componentDidUpdate = (prevState) => {
        if(this.state.redirect) {
            return <Redirect to="/home" />
        }
    }

    render = () => {
        return (
            <div>
                {this.state.loggingIn ? 
                <Spinner /> :
                <div id="login-window-main">
                    <img xs="1" src={logo} id="login-logo" alt="logo" />
                    <Row>
                        <Col xs="12">
                            <h4 id="login-window-header">Who Are You?</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ span: 6, offset: 3}}>
                            <Form.TextInput label="Username" name="username" handleChange={this.handleChange} />                   
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ span: 6, offset: 3 }}>
                            <Form.Password label="Password" name="password" handleChange={this.handleChange} />                    
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ span: 3, offset: 3 }}>
                            <Form.Button label="Cancel" onClick={this.cancel} />
                        </Col>
                        <Col xs={{ span: 3 }}>
                            <Form.Button label="Login" onClick={this.login} />
                        </Col>
                    </Row>
                </div> }
            </div>

        )
    }
}

export default LoginWindow;
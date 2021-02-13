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
        loggingIn: false
    }

    onChange = event => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value });
    }

    login = async (event) => {
        event.preventDefault();

        console.log("what about here")


        console.log(this.state.username);
        console.log(this.state.password)


        if(this.state.username && this.state.password) {
            console.log("really?")
            let userInfo = {
                email: this.state.username,
                password: this.state.password
            };

            console.log("this is before the api call")
            API.loginUser(userInfo).then( data => {
                if(data){
                    this.setState({ loggingIn: false })
                }
                console.log(data)
            })
        }



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
                            <Form.TextInput label="Username" name="username" value={this.state.username} onChange={this.onChange} />                   
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ span: 6, offset: 3 }}>
                            <Form.Password label="Password" name="password" value={this.state.password} onChange={this.onChange} />                    
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
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import API from "../utils/userAPI";
import "./LoginWindow.css";
import Form from "../Components/Inputs";
import Spinner from "../Components/Spinner";
import ropeLogo from "../Images/rope.png";
import { withRouter } from 'react-router-dom';

class LoginWindow extends Component {
    state = {
        username: "",
        password: "",
        redirect: false,
        loggingIn: false
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    login = async (event) => {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            let userInfo = {
                username: this.state.username,
                password: this.state.password
            };

            API.loginUser(userInfo).then(result => {
                if (result) {
                    this.setState({ loggingIn: false })
                }
                if (result.data.success) {
                    this.props.history.push("/home");
                }
            })
        }



        this.setState({ loggingIn: true })
        // new Audio(fartSound).play();
        // let redirect = await API.loginUser(this.state);
        return;
    }

    cancel = () => {
        this.setState({ username: "", password: "", redirect: false })
    }

    componentDidUpdate = (prevState) => {
        if (this.state.redirect) {
            return <Redirect from="/" to="/home" />
        }
    }

    componentWillMount = async () => {
        await API.authCheck().then(res => {
            if (res.data) {
                this.props.history.push("/home")
            }
        })
    }

    render = () => {
        return (
            <div>
                {this.state.loggingIn ?
                    <Spinner /> :
                    <div>
                        <img src={ropeLogo} id="rope-logo" alt="rope" />
                        <div id="login-window-main">
                            <Row>
                                <Col xs="12">
                                    <h4 id="login-window-header">Who Are You?</h4>
                                </Col>
                            </Row>
                            <form onSubmit={this.login} >
                            <Row>
                                <Col xs={{ span: 12 }} md={{ span: 6, offset: 3 }}>
                                    <Form.TextInput label="Username" name="username" value={this.state.username} onChange={this.onChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 12 }} md={{ span: 6, offset: 3 }}>
                                    <Form.Password label="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                </Col>
                            </Row>
                                <Row>
                                    <Col xs={{ span: 12 }} md={{ span: 3, offset: 3 }}>
                                        <Form.Button label="Login" onClick={this.login} />
                                    </Col>
                                    <Col xs={{ span: 12 }} md={{ span: 3 }}>
                                        <Form.Button label="Clear" onClick={this.cancel} />
                                    </Col>
                                </Row>
                            </form>
                            <Row>
                                <Col>
                                    <Link to="/register"><p className="registerLink">Create an account</p></Link>
                                </Col>
                            </Row>
                        </div>
                    </div>}
            </div>

        )
    }
}

export default withRouter(LoginWindow);
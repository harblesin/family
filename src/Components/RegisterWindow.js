import React, { Component } from "react";
import styles from "./RegisterWindow.module.css";
import { Row, Col } from "react-bootstrap";
import Form from "../Components/Inputs"
import API from "../utils/userAPI";
import { withRouter } from "react-router-dom";
// import bcrypt from "bcrypt";

class RegisterWindow extends Component {

    state = {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        err: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value})

    signUp = async (e) => {
        e.preventDefault();
        let { email, username, password, confirmPassword } = this.state;
        if(email && username && password && confirmPassword ) {

            if(password !== confirmPassword){
                this.setState({ err: "PASSWORDS DONT MATCH NUMNUTZ"});
                return;
            }


            let hashCost = 12;

            // password = await bcrypt.hash(password, hashCost);

            let userInfo = {
                email, 
                username, 
                password
            }

            API.signUp(userInfo).then( (res) => {
                if(res.data.success) {
                    alert(res.data.msg);
                    this.props.history.push("/");
                } else {
                    console.log("i dunno dude")
                }
            })
        }
    }

    render = () => {
        return (
            <div className={styles.div}>
                <Row>
                    <Col xs="12">
                        <h2 id={styles.header}>Who are you really</h2>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col xs={{ span: 6, offset: 3}}>
                        <Form.TextInput label="Email" name="email" value={this.state.email} onChange={this.onChange} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 6, offset: 3}}>
                        <Form.TextInput label="Username" name="username" value={this.state.username} onChange={this.onChange} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 6, offset: 3}}>
                        <Form.Password label="Password" name="password" value={this.state.password} onChange={this.onChange} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 6, offset: 3}}>
                        <Form.Password label="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} />
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col xs={{ span: 6, offset: 3}}>
                        <Form.Button label="Sign Up" onClick={this.signUp} />
                    </Col>
                </Row>
            </div>
        )        
    }

}

export default withRouter(RegisterWindow);
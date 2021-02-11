import React, { Component } from "react";
import axios from 'axios';
import Dashboard from "../Components/Dashboard";
import LoginWindow from "../Components/LoginWindow";
import "./LoginPage.css";

const Login = props => {
		return <div id="login-page">
				    <LoginWindow />
		        </div>
}

export default Login;
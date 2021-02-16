import React, { Component } from "react";
import "./HomePage.css";
import API from "../utils/userAPI";
import Dashboard from "./Dashboard";
import { withRouter } from "react-router-dom";

class HomePage extends Component {

	componentWillMount = async () => {

		await API.authCheck().then ( res => {
			if(!res.data){
				this.props.history.push("/")
			}
		})
	}

	render = () => {
		return <div id="homepage-body">
				<Dashboard />
		</div>
	}

}

export default withRouter(HomePage)
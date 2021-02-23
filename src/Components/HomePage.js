import React, { Component } from "react";
import "./HomePage.css";
import API from "../utils/userAPI";
import Dashboard from "./Dashboard";
import { withRouter } from "react-router-dom";

class HomePage extends Component {

	state = {
		user: ""
	}

	componentDidMount = async () => {

		await API.authCheck().then ( res => {
			if(!res.data){
				this.props.history.push("/")
			} else {
				this.setState({ user: res.data.user.username })
			}
		})
	}

	render = () => {
		return <div id="homepage-body">
				<Dashboard user={this.state.user} />
		</div>
	}

}

export default withRouter(HomePage)
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./HomePage.css";
import API from "../utils/userAPI";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { withRouter } from "react-router-dom";

class HomePage extends Component {

	state = {
		user: ""
	}

	componentDidMount = async () => {

		await API.authCheck().then(res => {
			if (!res.data) {
				this.props.history.push("/")
			} else {
				this.setState({ user: res.data.user.username })
			}
		})
	}

	render = () => {
		return <div id="homepage-body">
			<Navbar />
			<Row>
				<Col xs={{ span: 3 }}>
					<Sidebar />
				</Col>
				{/* <Col xs={{span: 1}}>
				</Col> */}
				<Col xs={{ span: 9 }}>
					<Dashboard user={this.state.user} />
				</Col>
			</Row>
		</div>
	}

}

export default withRouter(HomePage)
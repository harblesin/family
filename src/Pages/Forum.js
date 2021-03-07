import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Forum.module.css";
import API from "../utils/userAPI";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import { withRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Forum extends Component {

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
		return <div id={styles.forumMain}>
			<Navbar />
            <Sidebar />
            <Router>
                <Switch>
                    <Row>
                        <Col xs={{spam: 9, offset: 3}}>
                            <Route exact path="/f" render={(props) => ( <Feed /> )} />
                        </Col>
                    </Row>
                </Switch>
            </Router>
		</div>
	}

}

export default withRouter(Forum)
import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Dashboard.css"
import InputMenu from "./InputMenu";
import Feed from "./Feed";



const Dashboard = (props) => {


// render = () => {
    return <div id="dashboard-body">
        <h3 id="welcomeHeader">Welcome you stupid whore :)</h3>
        <Row>
            <Col xs={{ span: 8, offset: 2}}>
                <Feed />                
            </Col>
        </Row>

        <InputMenu user={props.user} />
    </div>
// }



}

export default Dashboard;
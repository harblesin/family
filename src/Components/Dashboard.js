import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Dashboard.css"
import InputMenu from "./InputMenu";
import Chat from "./Chat";



const Dashboard = (props) => {


// render = () => {
    return <div id="dashboard-body">
        <h3 id="welcomeHeader">Welcome you stupid whore :)</h3>
        <Row>
            <Col xs={{ span: 12 }}>
                <Chat />                
            </Col>
        </Row>

        <InputMenu user={props.user} />
    </div>
// }



}

export default Dashboard;
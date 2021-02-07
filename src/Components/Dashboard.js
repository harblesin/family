import React, { Component } from "react";
import "./Dashboard.css"
import axios from "axios";
import InputMenu from "./InputMenu";
import Feed from "./Feed";



class Dashboard extends Component {
    state = {
        settings: ""
    }

render = () => {
    return <div id="dashboard-body">
        <InputMenu />
        <Feed />
    </div>
}



}

export default Dashboard;
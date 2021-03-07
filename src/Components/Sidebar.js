import React from 'react';
import styles from "./Sidebar.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div id={styles.sidebarMain}>
            <Link to="/home"><p className={styles.sideBarLink}>Home</p></Link>
            <Link to="/f"><p className={styles.sideBarLink}>Forum</p></Link>
            {/* <Link to="/f/fun"><p className={styles.sideBarLink}>Fun</p></Link> */}
        </div>
    )
}

export default Sidebar;